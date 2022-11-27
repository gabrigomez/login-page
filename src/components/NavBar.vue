<template>
    <div>
        <nav class="navbar">
            <div class="container">
              <router-link to="/" class="navbar-brand">Home</router-link>
              <div class="login-container">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link" v-if="!currentUser">Login</router-link>
                    <router-link to="/dashboard" class="nav-link" v-else>Dashboard</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/signup" class="nav-link" v-if="!currentUser">Sign Up</router-link>
                    <router-link to="/" class="nav-link">Log out</router-link>                    
                  </li>        
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {        
        currentUser() {
            return this.$store.state.auth.user;
        }
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
  .navbar {
    background: #1e2833;
  }
  .navbar-brand, .nav-link {
    color:aliceblue;
  }
  .nav-link:hover, .navbar-brand:hover {
    color:#214a80
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }
  .nav-item {
    margin: 10px;
  }
</style>