import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'


//Activating Vue Router
Vue.use(Router)

//config object
export default new Router({
    //Index router = first route to load when the app starts
    /*mode: 'history' disable hash --- mode:hash -enable hash*/ 
    mode:'history',
    scrollBehavior(to){
        if(to.hash){
            return {selector:to.hash}
        }
    },
    routes:[{
        name:'inicio',
        path:'/',
        component:Inicio
    },{
        path:'/usuario',
        component:Usuario,
        props: true,
        children:[
            {path:'',component:UsuarioLista},
            {path:':id', component:UsuarioDetalhe,props:true},
            {path:':id/editar', component:UsuarioEditar, props:true , name:'editarUsuario'}
        ]
    },{
        path:'/redirecionar',
        redirect:'/usuario'
    },{
        //Route catch-all
        path:'*',
        redirect:'/'
    }]
})