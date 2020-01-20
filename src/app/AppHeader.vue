<template>
  <header class="header">
    <div class="container">
      <div class="grid">
        <div class="column">
          <div class="logo">
            <router-link to="/" exact>
              <img src="/assets/img/logo.svg" alt="logo" />
            </router-link>
            <router-link to="/" exact>Видеосервис</router-link>
          </div>
        </div>
        <div class="column bigger search">
          <input type="text" placeholder="Поиск..." />
          <span class>Найти</span>
        </div>
        <div class="column auth">
          <button class="btn">Войти</button>
        </div>
      </div>

      <div class="grid">
        <div class="column">
          <nav>
            <ul class="menu">
              <li>
                <router-link to="/" exact>Фильмы</router-link>
              </li>
              <li>
                <router-link to="/tv" exact>Телеканалы</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
 
 
<script>
export default {
  name: "AppHeader"
};
</script>
 
 
<style lang="scss">
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
  .search {
    margin-top: 5px;
    text-align: center;
    input {
      min-width: 320px;
    }
    span {
      color: $primary;
      margin: 0 30px;
      cursor: pointer;
      &:hover {
        opacity: $opacity;
      }
    }
  }
  .auth {
    text-align: right;
  }

  nav {
    text-align: center;
    margin: 40px 0 30px;
    li {
      display: inline-block;
      padding: 0 10px;
      a{
        font-weight: 500;
        font-size: $font-size-biggest;
        &.router-link-active{
            color: $primary;
            display: inline-block;
            padding-bottom: 5px;
            border-bottom: 1px solid $primary;
        }
      }
    }
  }
}
</style>