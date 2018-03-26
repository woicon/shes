<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="less">
@import '../static/css/style.less';
@import '../static/css/font.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin:0;
  padding:0;
}
body{

background-image: linear-gradient(-180deg, #1C1B1C 0%, #08090E 100%); 
}

</style>
