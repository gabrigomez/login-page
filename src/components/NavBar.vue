<template>
  <nav class="navbar">
    <div class="home-container">
      <ph-house :size="24" color="white" class="icon" />
      <router-link to="/" class="nav-link">Home</router-link>
    </div>
    <div class="login-container">
      <div class="nav-item-container">
        <ph-keyhole :size="24" color="white" class="icon" />
        <router-link to="/login" class="nav-link" v-if="!currentUser"
          >Login</router-link
        >
        <router-link to="/dashboard" class="nav-link" v-else
          >Dashboard</router-link
        >
      </div>
      <div class="nav-item-container">
        <ph-sign-in :size="24" color="white" class="icon" />
        <router-link to="/signup" class="nav-link" v-if="!currentUser"
          >Sign Up</router-link
        >
        <a href @click.prevent="handleLogout" class="nav-link" v-else
          >Log out</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { PhSignIn, PhKeyhole, PhHouse } from "phosphor-vue";

export default {
  name: "NavBar",
  components: {
    PhSignIn,
    PhKeyhole,
    PhHouse,
  },

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #460150;
  display: flex;
  align-items: center;
}
.navbar-brand,
.nav-link {
  text-decoration: none;
  color: #ffff;
  font-size: 20px;
  font-weight: 300;
  transition: all 0.3s ease-in-out;
  position: relative;
  text-transform: uppercase;
  padding-left: 0px;
}
.nav-link:hover {
  color: #ac04ee;
}
.nav-item-container {
  display: flex;
}
.home-container {
  display: flex;
}
.login-container {
  display: flex;
}
.icon {
  margin-top: 10px;
  margin-right: 4px;
}
</style>
