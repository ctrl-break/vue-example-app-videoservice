<template>
  <div class="auth">
    <button class="btn" @click="toggleModal">Войти</button>
  </div>
</template>
 
 
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Auth",
  computed: mapGetters(["modalState", "user"]),
  methods: {
    ...mapMutations(["toggleModal"]),
  }
};
</script>
 
 
<style lang="scss" scoped>
.auth {
  width: 100%;
  text-align: right;
}
</style>