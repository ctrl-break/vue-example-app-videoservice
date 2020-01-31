<template>
  <header class="header">
    <div class="container">
      <div class="grid">
        <div class="column">
          <div class="logo">
            <router-link to="/" exact>
              <img src="/assets/img/logo.svg" alt="logo" />
            </router-link>
            <router-link to="/" exact class="site_name">Видеосервис</router-link>
          </div>
        </div>
        <div class="column bigger search_wrapper">
          <SearchMovie />
        </div>
        <div class="column auth_wrapper">
            <Auth />
        </div>
      </div>

      <Navigation />
    </div>
  </header>
</template>
 
 
<script>
import SearchMovie from './components/SearchMovie.vue';
import Navigation from './components/Navigation.vue';
import Auth from './components/Auth.vue';

export default {
  name: "AppHeader",
  components: {
    Navigation,
    Auth,
    SearchMovie
  }
};
</script>
 
 
<style lang="scss" scoped>
.header {
  padding: 30px 0 0;
  .logo {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 500;
      color: $text-primary;
      img {
        margin-right: 11px;
      }
    }
  }
}

@media screen and (max-width: $width-desktop-sm){
  .grid{
    position: relative;
    .auth_wrapper{
      position: absolute;
      top: 3px;
      right: 0;
    }
    .search_wrapper{
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: $width-phone){
  .grid{
    position: relative;
    .auth_wrapper{
      position: absolute;
      top: 3px;
      right: 0;
    }
    .search_wrapper{
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: $width-phone-sm){
  .site_name{
    display: none;
  }
}
</style>