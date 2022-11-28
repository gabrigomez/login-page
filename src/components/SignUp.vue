<template>
    <div>
        <div>
            <div class="sign-up-dark">
                <form @submit.prevent="handleSubmit" method="post">
                    <h2 class="sr-only">
                        Sign up Form
                    </h2>
                    <div class="illustration">
                        <i class="icon ion-ios-locked-outline">                            
                        </i>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="name" name="firstName" placeholder="Name" v-model=first_name>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="Email" v-model=email>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Password" v-model=password>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="confirmPassword" placeholder="Confirm your password" v-model=passwordConfirmation>
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
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VueLoginSignUp',

    data() {
        return {
            first_name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    },

    mounted() {
        
    },

    methods: {
        async handleSubmit() {
            const data = {
                first_name: this.first_name,
                email: this.email,
                password: this.password,
                passwordConfirmation: this.passwordConfirmation
            }
            await axios.post('users', data)
            console.log(data)
            this.$router.push('/login')
        }
    },
};
</script>

<style scoped>
.sign-up-dark {
        height:1000px;
        background:#475d62 url(https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/non-4k/preview/29.jpg?3);
        background-size:cover;
        position:relative;
    }

    .sign-up-dark form {
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

    .sign-up-dark .illustration {
        text-align:center;
        padding:15px 0 20px;
        font-size:100px;
        color:#2980ef;
    }

    .sign-up-dark form .form-control {
        background:none;
        border:none;
        border-bottom:1px solid #434a52;
        border-radius:0;
        box-shadow:none;
        outline:none;
        color:inherit;
    }

    .sign-up-dark form .btn-primary {
        background:#214a80;
        border:none;
        border-radius:4px;
        padding:11px;
        box-shadow:none;
        margin-top:26px;
        text-shadow:none;
        outline:none;
    }

    .sign-up-dark form .btn-primary:hover, .sign-up-dark form .btn-primary:active {
        background:#566880;
        outline:none;
    }

    .sign-up-dark form .forgot {
        display:block;
        text-align:center;
        font-size:12px;
        color:#6f7a85;
        opacity:0.9;
        text-decoration:none;
    }

    .sign-up-dark form .forgot:hover, .sign-up-dark form .forgot:active {
        opacity:1;
        text-decoration:none;
    }

    .sign-up-dark form .btn-primary:active {
        transform:translateY(1px);
    }

</style>