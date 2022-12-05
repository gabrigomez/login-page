<template>
    <div>
        <nav class="navbar">
            <div class="container">
              <div class="nav-item-container">
                <ph-house :size="24" color="white" class="icon-home" />
                <router-link to="/" class="navbar-brand">Home</router-link>
              </div>
              <div class="login-container">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <div class="nav-item-container">
                      <ph-keyhole :size="24" color="white" class="icon" />
                      <router-link to="/login" class="nav-link" v-if="!currentUser">Login</router-link>
                      <router-link to="/dashboard" class="nav-link" v-else>Dashboard</router-link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-item-container">
                      <ph-sign-in :size="24" color="white" class="icon" />
                      <router-link to="/signup" class="nav-link" v-if="!currentUser">Sign Up</router-link>
                      <a href @click.prevent="handleLogout" class="nav-link" v-else>Log out</a>                    
                    </div>
                  </li>        
                </ul>
              </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { PhSignIn, PhKeyhole, PhHouse } from "phosphor-vue";

export default {
    name: 'NavBar',
    components: {
      PhSignIn,
      PhKeyhole,
      PhHouse
    },
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
    background: #460150;
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
  .nav-item-container {
    display: flex;
  }
  .icon {
    margin-top: 10px;
    margin-right: 4px;
  }
  .icon-home {
    margin-top: 8px;
    margin-right: 4px;
  }
  
</style>