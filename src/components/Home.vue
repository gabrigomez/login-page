<template>
  <div class="home-background">
    <div class="home-main-div">
      <h1>Login Page</h1>
      <p>develop with vueJS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueLoginHome",
};
</script>

<style scoped>
.home-background {
  height: 1000px;
  background: #572157 url(https://wallpaper.dog/large/20514944.jpg);
  background-size: cover;
  position: relative;
}

.home-main-div {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: #7f118d;
  padding: 40px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
}
</style>
