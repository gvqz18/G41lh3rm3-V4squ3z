<template>
  <div id="app">
    <vueExibicao></vueExibicao>
    <router-view></router-view>
  </div>
</template>

<!--Declarando componentes-->
<script>
import vueExibicao from './components/vueExibicao.vue'
export default {
  name: 'app',
  components: {
    vueExibicao
  }
}
</script>

<!--Atributos do CSS -->
<style>

body{
    width: 100%;
    height: 100%;
    background-color: #000000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
