<template>
    <main class="content container">
        <router-view></router-view>
    </main>
</template>
 
 
<script>
export default {
  name: "AppContent"
};
</script>
 
 
<style lang="scss">
  .content{
    margin-bottom: 40px;
  }
</style>