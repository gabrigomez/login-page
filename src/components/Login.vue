<template>    
    <div>
        <div class="login-dark">
            <form method="post"  @submit.prevent="handleSubmit">
                <h2 class="sr-only">
                    Login Form
                </h2>
                <div class="illustration">
                    <i class="icon ion-ios-locked-outline">                            
                    </i>
                </div>
                <div class="form-group">
                    <input class="form-control" type="email" name="email" placeholder="Email" v-model="user.email">
                </div>
                <div class="form-group">
                    <input class="form-control" type="password" name="password" placeholder="Password" v-model="user.password">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit">
                        Log In
                    </button>
                </div>
                <a href="#" class="forgot">Forgot your email or password?</a>
            </form>
        </div>    
    </div> 
</template>

<script>
import User from '../models/user'

export default {
    name: 'LoginPage',

    data() {
        return {
            user: new User ('', ''),            
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },

    mounted() {
        
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/dashboard');
        }
    },

    methods: {
        handleSubmit() {
            if (this.user.email && this.user.password) {                
                this.$store.dispatch('auth/login', this.user)
                    .then(() => {
                        this.$router.push('/dashboard');
                        },
                    )                    
            }           
        }
    },
};
</script>

<style scoped>
    .login-dark {
        height:1000px;
        background:#475d62 url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/preview/29.jpg?3);
        background-size:cover;
        position:relative;
    }

    .login-dark form {
        max-width:320px;
        width:90%;
        background-color:#1e2833;
        padding:40px;
        border-radius:4px;
        transform:translate(-50%, -50%);
        position:absolute;
        top:50%;
        left:50%;
        color:#fff;
        box-shadow:3px 3px 4px rgba(0,0,0,0.2);
    }

    .login-dark .illustration {
        text-align:center;
        padding:15px 0 20px;
        font-size:100px;
        color:#2980ef;
    }

    .login-dark form .form-control {
        background:none;
        border:none;
        border-bottom:1px solid #434a52;
        border-radius:0;
        box-shadow:none;
        outline:none;
        color:inherit;
    }

    .login-dark form .btn-primary {
        background:#214a80;
        border:none;
        border-radius:4px;
        padding:11px;
        box-shadow:none;
        margin-top:26px;
        text-shadow:none;
        outline:none;
    }

    .login-dark form .btn-primary:hover, .login-dark form .btn-primary:active {
        background:#566880;
        outline:none;
    }

    .login-dark form .forgot {
        display:block;
        text-align:center;
        font-size:12px;
        color:#6f7a85;
        opacity:0.9;
        text-decoration:none;
    }

    .login-dark form .forgot:hover, .login-dark form .forgot:active {
        opacity:1;
        text-decoration:none;
    }

    .login-dark form .btn-primary:active {
        transform:translateY(1px);
    }
</style>