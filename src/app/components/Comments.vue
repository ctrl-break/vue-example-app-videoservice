<template>
  <div class="comments">
    <div class="grid">
      <div class="column text-center title">Комментарии</div>
    </div>

    <div class="grid" v-if="user">
      <div class="column"></div>
      <div class="column bigger">
        <textarea
          v-model="commentText"
          placeholder="Введите комментарий (больше 10 символов)..."
          :class="{ error: invalidText }"
        ></textarea>
      </div>
      <div class="column action">
        <button class="btn" @click="saveComment">Опубликовать</button>
      </div>
    </div>

    <div class="grid" v-for="comment of comments" v-bind:key="comment.id">
      <div class="column"></div>
      <div class="column bigger">
        <div class="comment">
          <div class="strong">{{comment.author}}</div>
          <div>{{comment.text}}</div>
        </div>
      </div>
      <div class="column action">
        <span
          class="delete"
          v-if="comment.author === user"
          @click="deleteComment(comment.id)"
        >&times;</span>
      </div>
    </div>
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Comments",
  props: ["comments", "movieId"],
  computed: mapGetters(["user"]),
  data() {
    return {
      invalidText: false,
      commentText: ""
    };
  },
  methods: {
    ...mapMutations(["saveNewComment", "deleteOwnComment"]),
    saveComment() {
      this.invalidText = !this.isValid();
      if (this.invalidText) {
        return;
      }
      const comment = {
        id: new Date().getTime(),
        author: this.user,
        text: this.commentText,
        movieId: this.movieId
      };
      const currentComments = localStorage.getItem("comments")
        ? JSON.parse(localStorage.getItem("comments"))
        : [];
      currentComments.push(comment);
      localStorage.setItem("comments", JSON.stringify(currentComments));
      this.saveNewComment(comment);
      this.commentText = "";
    },

    deleteComment(commentId) {
      const currentComments = localStorage.getItem("comments")
        ? JSON.parse(localStorage.getItem("comments"))
        : [];
      const index = currentComments.findIndex(item => item.id === commentId);
      if (index >= 0) {
        this.deleteOwnComment(
          this.comments.find(item => item.id === commentId)
        );
        currentComments.splice(index, 1);
        localStorage.setItem("comments", JSON.stringify(currentComments));
      }
    },

    isValid() {
      return this.commentText.length > 10;
    }
  }
};
</script>
 
 
<style lang="scss" scoped>
.comments {
  .title {
    font-size: $font-size-big;
    font-weight: 500;
  }
  .comment {
    background-color: $secondary;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    width: 100%;
  }
  .action {
    .delete {
      font-size: $font-size-biggest;
      color: $primary;
      cursor: pointer;
    }
  }
  textarea {
    width: 100%;
    margin-bottom: 20px;
    background-color: $secondary;
    border: none;
    padding: 16px;
    &.error {
      background-color: $bg-alarm;
    }
  }
}
</style>