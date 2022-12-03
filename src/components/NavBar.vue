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
                    <a href @click.prevent="handleLogout" class="nav-link" v-else>Log out</a>                    
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
      handleLogout () {
        this.$store.dispatch('auth/logout')
          .then(() => {
            this.$router.push('/login');
          }) 
        }
    },
};
</script>

<style scoped>
  .navbar {
    background: linear-gradient(50deg, rgba(0,0,0,1) 0%, rgba(13,1,70,0.6867121848739496) 89%);
  }
  .navbar-brand, .nav-link {
    text-decoration: none;
        color: #FFFF;
        font-size: 20px;
        font-weight: 300;
        transition: all 0.3s ease-in-out;
        position: relative;
        text-transform: uppercase;
  }
  .nav-link:hover, .navbar-brand:hover {
    color:#ac04ee
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }
  .nav-item {
    margin: 10px;
  }
  
</style>