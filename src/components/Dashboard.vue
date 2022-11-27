<template>
    <div class="dashboard-background">
        <div class="dashboard-main-div">
            <h1>Hi, {{currentUser.user.email}}!</h1>
            <p>here's your dashboard application</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'VueLoginDashboard',
    computed: {        
        currentUser() {
            return this.$store.state.auth.user;
        }
    },

    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login')
        }
    },

    methods: {
        

    },
};
</script>

<style scoped>

    .dashboard-background {
        height:1000px;
        background:#475d62 url(https://wallpaperaccess.com/full/1219743.jpg);
        background-size:cover;
        position:relative;
    }
    .dashboard-main-div {
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