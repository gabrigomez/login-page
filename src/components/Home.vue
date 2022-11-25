<template>
    <div class="home-background">
        <div class="home-main-div">
            <h1>Login Page</h1>
            <p>develop with vueJS</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VueLoginHome',
    async created() {
        const response = await axios.get('user')

        console.log(response)
    },
    
    data() {
        
    },

    mounted() {
        
    },

    methods: {
        

    },
};
</script>

<style scoped>

    .home-background {
        height:1000px;
        background:#475d62 url(https://wallpaperaccess.com/full/1219743.jpg);
        background-size:cover;
        position:relative;
    }
    .home-main-div {
        max-width:500px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
</style>