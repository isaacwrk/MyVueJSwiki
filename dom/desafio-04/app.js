new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		perigo:true,
		classe3:'',
		classe4:'',
		cor5:'',
		estilo5:{
			width:'100px',
			height:'100px'
		},
		width:'0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' :'destaque'
			},1000)
		},
		iniciarProgresso() {
			//setando valor inicial da barra de progresso
			let valor = 0
			//setando o valor para acrescentar de 5 em 5 em 0,5 segundos concatenando o valor em forma de porcentagem
			//quando o valor chega a 100, limpa o temporizador
			const temporizador = setInterval(()=>{
				valor +=5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			},500)
		},
		setPerigo(event){
			if(event.target.value == "true"){
				this.perigo  = true
			}else if (event.target.value == "false"){
				this.perigo = false
			}
		}
	}
})
