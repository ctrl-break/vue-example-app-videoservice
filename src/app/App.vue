<template>
  <div class="wrapper anim_appear">
    <AppHeader />
    <AppContent />
    <AppFooter />
    <Modal v-if="modalState" @close="closeModal" />
  </div>
</template>
 
 
<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppContent from "./AppContent.vue";
import Modal from "./components/Modal.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppContent,
    Modal
  },
  computed: mapGetters(["modalState"]),
  methods: {
    ...mapMutations(["closeModal"])
  }
};
</script>
 
 
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  min-height: 100vh;
  height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
.content {
  flex: 1 0 auto;
}
</style>