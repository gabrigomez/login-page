<template>
    <div>
        <nav class="navbar">
            <div class="container">
              <a href="#" class="navbar-brand">Home</a>
              <div class="login-container">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link">Login</a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">Sign Up</a>                    
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