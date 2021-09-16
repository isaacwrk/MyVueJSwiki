import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

//Activating Vue Router
Vue.use(Router)

//config object
export default new Router({
    //Index router = first route to load when the app starts
    /*mode: 'history' disable hash --- mode:hash -enable hash*/ 
    mode:'history',
    routes:[{
        path:'/',
        component:Inicio
    },{
        path:'/usuario/:id',
        component:Usuario,
        props: true
    }]
})