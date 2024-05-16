<template>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Protest Riot", sans-serif;
    background-repeat: repeat!important;
}
body{
  margin: 0;
  width: 100%;
  background-image:linear-gradient(#fff, #fff);
  
}
#app, #layout-wrapper {
  background-color: transparent;
  background-size:80px 80px;
  height: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
</style>
