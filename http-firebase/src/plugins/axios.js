import Vue from 'vue'
import Axios from 'axios'

// Axios.defaults.baseURL = 'https://axiosvuejs-4f470-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = Axios
        Vue.prototype.$http = Axios.create({
            baseURL : 'https://axiosvuejs-4f470-default-rtdb.firebaseio.com/'
        })
    }
})