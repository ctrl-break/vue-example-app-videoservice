<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="closeModal">
        <div class="modal-container">
          <div class="modal-header text-center">
            <slot name="header">Вход</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form>
                <div class="text-center">
                  <input type="text" placeholder="Логин" v-model="login"/>
                </div>
                <div class="text-center">
                  <input type="password" placeholder="Пароль" v-model="password"/>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    Запомнить
                  </label>
                </div>
                <div class="text-center">
                  <button class="btn modal-default-button" @click="signIn">Войти</button>
                </div>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Modal",
  data() {
    return {
      login: "someuser",
      password: 'somepassword'
    };
  },
  computed: mapGetters(["user", "currentGenre"]),
  methods: {
    ...mapMutations(["setUser"]),
    closeModal(event) {
      console.log(event);
      if (event.target.className === "modal-wrapper") {
        this.$emit("close");
      }
    },
    signIn(event) {
      console.log("signIn", event);
      event.preventDefault();
      this.setUser(this.login);
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  font-size: $font-size-biggest;
  font-weight: 500;
}

.modal-body {
  margin: 20px 0;
  form {
    width: 232px;
    input[type="text"],
    input[type="password"] {
      width: 100%;
    }
    & > div {
      margin-bottom: 20px;
    }
  }
}

.modal-default-button {
  margin-top: 60px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>