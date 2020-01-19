<template>
    <div class="wrapper anim_appear">
        <AppHeader />
        <main class="content"></main>
        <AppFooter />
    </div>
</template>
 
 
<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
 
export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter
    }
};
</script>
 
 
<style lang="scss" scope>
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