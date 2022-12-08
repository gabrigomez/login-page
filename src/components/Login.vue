<template>
  <div>
    <div class="login-dark">
      <form method="post" @submit.prevent="handleSubmit">
        <h2 class="sr-only">Login Form</h2>
        <div class="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            v-model="user.password"
          />
        </div>
        <div class="form-group">
          <button class="submit-button" type="submit">Log In</button>
        </div>
        <router-link to="/forgotlogin" class="login-page"
          >Forgot your email or password?</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "LoginPage",

  data() {
    return {
      user: new User("", ""),
      errors: "",
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },

  mounted() {},
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },

  methods: {
    handleSubmit() {
      this.errors = [];

      if (!this.user.email) {
        this.errors = "E-mail is required!";
        this.$toast.error(`${this.errors}`, {
          position: "top-center",
        });
      }
      if (!this.user.password) {
        this.errors = "Password is required!";
        this.$toast.error(`${this.errors}`, {
          position: "top-center",
        });
      }
      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/dashboard");
            this.$toast.success(`Logado com sucesso!`, {
              position: "top-center",
            });
          },
          (error) => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            this.$toast.error(`${this.message}`, {
              position: "top-center",
            });
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.login-dark {
  height: 1000px;
  background: #475d62
    url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/preview/29.jpg?3);
  background-size: cover;
  position: relative;
}

.login-dark form {
  max-width: 320px;
  width: 90%;
  background-color: #1e2833;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}

.login-dark form .form-control {
  background: none;
  border: none;
  border-bottom: 1px solid #434a52;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button {
  background: #89029e;
  border: none;
  border-radius: 4px;
  padding: 11px;

  box-shadow: none;
  margin-top: 26px;
  text-shadow: none;
  outline: none;

  color: #fff;
  width: 100%;
}

.submit-button:hover {
  background: #c900bb;
  outline: none;
  cursor: pointer;
}

.login-dark form .btn-primary:hover,
.login-dark form .btn-primary:active {
  background: #566880;
  outline: none;
}

.login-page {
  display: block;
  text-align: center;
  font-size: 14px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

.login-page:hover {
  color: #ba06d6;
}
</style>
