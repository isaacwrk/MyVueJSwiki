<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <!-- buscando dados query do usuarioDetalhe.vue-->
    <p><strong>Completo:</strong>{{ $route.query.completo ? 'Sim' : 'Não'}}</p>
    <p><strong>Língua:</strong>{{ $route.query.lingua}}</p>
    <hr>
    <button primario>Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>
#rodape{
  margin-top: 1000px;
}
</style>