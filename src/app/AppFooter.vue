<template>
  <footer class="footer">
    <div class="container">
      <div class="flex_wrapper">
        <div class="logo">
          <img src="/assets/img/htc.svg" alt="logo" title="logo" />
        </div>

        <div class="info">
          <p>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
          <p>+7 (3412) 93-88-61, 43-29-29</p>
          <div class="htc">
            <a href="https://htc-cs.ru" target="_blank">htc-cs.ru</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
 
 
<script>
export default {
  name: "AppFooter"
};
</script>
 
 
<style lang="scss" scoped>
.footer {
  padding: 22px 20px 25px;
  background-color: $secondary;
  .flex_wrapper {
    display: inline-flex;
    padding-left: 10px;
    padding-right: 10px;
    .logo {
      padding-right: 40px;
    }
    .htc {
      a {
        color: #1f4766;
        font-weight: 500;
      }
    }
  }
}

@media screen and (max-width: $width-tablet) {
  .footer {
    padding: 20px;
    background-color: $secondary;
    .flex_wrapper {
      display: block;
      text-align: center;
      .logo {
        padding-right: 0;
        img {
          margin: 0 auto;
          max-width: 25px;
        }
      }
    }
  }
}
</style>