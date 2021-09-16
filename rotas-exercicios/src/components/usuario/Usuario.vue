<template>
  <div>
      <h2>Usuário</h2>
      <hr>
      <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods:{
    irParaInicio(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>