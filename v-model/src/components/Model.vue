<template>
<div id="app" class="main">
    <h1>{{ titulo }}</h1>
    <label for="">Nome:</label>
    <input type="text" v-model="nome">

    <br><br>
    <label for="">Telefone:</label>
    <input type="text" v-model="telefone">

    <br><br>
    <label for="">Deseja receber nossa newsletter?</label><br>
    <input type="radio" value="Sim" v-model="novidades"> Sim
    <input type="radio" value="Não" v-model="novidades"> Não

    <br><br>
    <label for="">Interesses</label><br>
    <input type="checkbox" value="Front-end" v-model="interesses"> Front-end
    <input type="checkbox" value="Back-end" v-model="interesses"> Back-end
    <input type="checkbox" value="Devops" v-model="interesses"> Devops
    <input type="checkbox" value="DBA" v-model="interesses"> DBA

    <br><br>
    <label for="">Como nos conheceu?</label><br>
    <select v-model="conheceu">
        <option value="">Escolha</option>
        <option value="Google">Google</option>
        <option value="Linkedin">LinkedIn</option>
        <option value="Facebook">Facebook</option>
    </select>

    <br><br>
    <button>Enviar</button>
    <hr>
</div>

<div class="data">
    <h2>Data</h2>
    Nome:{{ nome }} <br>
    Novidades: {{ novidades }}<br>
    Telefone: {{ telefone }} <br>
    Newsletter: {{ newsletter }}<br>
    Interesses: {{ interesses }} <br>
    Como nos conheceu? :{{ conheceu }}
</div>

</template>

<script>
export default {
el:'#app',
data(){
    return{
        titulo:'V-model in CLI Form',
        nome:'',
        telefone:'',
        novidades:'',
        interesses:[],
        conheceu:''
    }
}    

}
</script>

<style>

.main{
    background-color: grey;
    color:green;
}
.data{
    background-color:rgb(226, 144, 144);
}
</style>