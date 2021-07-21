new Vue({
    el:"#desafio",
    data:{
        nome:"Isaac",
        idade:23,
        idade_multiplicada:69,
        zoro:"zoro.jpeg"
    },
    methods: {
        random:function(){
            return Math.random()
        },
        idadeVezes3(){
            return this.idade * 3
        }
    },
})