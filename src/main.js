import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueExibicao from './components/vueExibicao'

//configuração de rotas
Vue.use(VueRouter);

const routes = [
  
  {path: '/home', name:'home', component: vueExibicao}
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

//declarando a rota
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

