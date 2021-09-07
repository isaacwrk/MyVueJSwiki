import Vue from 'vue'
import Axios from 'axios'

// Axios.defaults.baseURL = 'https://axiosvuejs-4f470-default-rtdb.firebaseio.com/'
// Axios.defaults.headers.common['Authorization'] = 'abc123'
// Axios.defaults.headers.get['Accetps']= 'aplication/json'

Vue.use({
    install(Vue){
        // Vue.prototype.$http = Axios
        Vue.prototype.$http = Axios.create({
            baseURL : 'https://axiosvuejs-4f470-default-rtdb.firebaseio.com/',
            headers:{
                get:{
                    "Authorization" : 'abc123'
                }
            }
        })

        // Interceptor de Requisicoes
        Vue.prototype.$http.interceptors.request.use(config =>{
            console.log(config.method)
            return config
        },error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res =>{
            const array = []
            for(let key in res.data){
                array.push({ id:key, ... res.data[key]})
            }
            res.data = array
            return res
        },error => Promise.reject(error))

    }
})