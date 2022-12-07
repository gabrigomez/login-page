<template>
    <div>
        <div>
            <div class="sign-up-dark">
                <form @submit.prevent="handleSubmit" method="post">
                    <h2 class="sr-only">
                        Sign up Form
                    </h2>                    
                    <div class="form-group">                        
                        <input class="form-control" type="name" name="firstName" placeholder="Name" v-model=user.first_name v-validate="'required|min:3|max:20'">
                        <div v-if="submitted && errors.has('firstName')" class="alert-danger">Campo obrigatório!</div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="E-mail" v-model=user.email v-validate="'required|min:3|max:20'" >
                        <div v-if="submitted && errors.has('email')" class="alert-danger">Campo obrigatório!</div>

                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Password" v-model=user.password v-validate="'required|min:3'">
                        <div v-if="submitted && errors.has('password')" class="alert-danger">Campo obrigatório!</div>

                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="confirmPassword" placeholder="Confirm your password" v-model=passwordConfirmation v-validate="'required|min:3'">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" type="submit">
                            Sign Up
                        </button>
                    </div>
                    <router-link to="/login" class="login-page" v-if="!currentUser">Go to login page</router-link>
                </form>
            </div>    
        </div>     
    </div>
</template>

<script>
import User from '../models/user'

export default {
    name: 'VueLoginSignUp',

    data() {
        return {
            user: new User ('', ''),
            passwordConfirmation: this.passwordConfirmation,
            message: '',
            submitted: false,
            passwordFail: false,
        };
    },

    mounted() {
        
    },

    methods: {
        handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if(isValid) {
                    if (this.user.password !== this.passwordConfirmation) {
                        this.$toast.error("As senhas não conferem!", {
                            position: "top-center",
                        })
                        this.submitted = false;
                        this.user.password = '';
                        this.passwordConfirmation = '';                        
                    } else {
                        this.$store.dispatch('auth/register', this.user)
                            .then(() => {
                                this.$router.push('/login')
                                this.$toast.success(`Cadastro realizado com sucesso!`, {
                                    position: "top-center",
                                })
                            },
                            error => {
                                console.log('entrou aqui')
                                this.message = (error.response && error.response.data) || error.message || error.toString();
                                this.$toast.error(`${this.message}`, {
                                    position: "top-center",
                                })
                            })            
                    }
                }
            })
        }
    },
};
</script>

<style scoped>

    .alert-danger {
        text-align: center;
        background: none;
        color: slateblue;
        font-size: 14px;
    }
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
        background: #710781;
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

    .sign-up-dark form .btn-primary:active {
        transform:translateY(1px);
    }
    .login-page {
        display:block;
        text-align:center;
        font-size:14px;
        color:#6f7a85;
        opacity:0.9;
        text-decoration:none;
    }
    .login-page:hover {        
        color:#ba06d6;
    }

</style>