import Vue from 'vue'
import App from './App.vue'
import Store from './store/store'

Vue.config.productionTip = false

import Painel from './components/Painel'
Vue.component('Painel', Painel)

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
	Store,
	render: h => h(App),
}).$mount('#app')
