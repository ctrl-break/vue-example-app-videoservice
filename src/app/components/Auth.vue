<template>
  <div class="auth">
    <span class="signin">
      <input type="text" @change="changeName" :value="user" v-if="showUserForm" />
      <span v-if="!showUserForm" @click="showForm">{{user}}</span>

      <button class="btn" @click="toggleModal" v-if="!user">Войти</button>
      <span class="logout" @click="userLogout" v-if="user">Выйти</span>
    </span>
    
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Auth",
  data() {
    return {
      showUserForm: false
    };
  },
  computed: mapGetters(["modalState", "user"]),
  methods: {
    ...mapMutations(["toggleModal", "setUser", "userLogout"]),
    changeName(event) {
      if (!event.target.value) {
        return;
      }
      this.setUser(event.target.value);
      this.showUserForm = false;
    },
    showForm() {
      this.showUserForm = true;
    }
  }
};
</script>
 
 
<style lang="scss" scoped>
.auth {
  width: 100%;
  text-align: right;
  margin-top: 5px;
  input{
    max-width: 120px;
  }
}

.logout{
  color: $primary;
  margin-left: 16px;
  cursor: pointer;
}
</style>