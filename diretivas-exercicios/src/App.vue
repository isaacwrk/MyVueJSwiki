<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'usando diretiva v-text'"></p>
		<p v-html="'usando v-html'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'grey'">usando diretiva personalizada</p>
		<p v-destaque="'blue'">usando diretiva personalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'grey'">usando diretiva personalizada</p>
		<p v-destaque-local="'blue'">usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
		components:{},
		directives:{
			'destaque-local':{
				bind(el, binding,vnode){
			let atraso = 0 
			if(binding.modifiers['atrasar']) atraso = 3000

			setTimeout(()=>{
				if(binding.arg === 'fundo'){
					el.style.backgroundColor =binding.value
				}else{
					el.style.color = binding.value
				}
			},atraso)
				}
			}
		}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
