<template>
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
</template>
 
 
<script>
export default {
  name: "Navigation"
};
</script>
 
 
<style lang="scss" scoped>
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
</style>