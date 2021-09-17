<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <!-- buscando dados query do usuarioDetalhe.vue-->
    <p><strong>Completo:</strong>{{ $route.query.completo ? 'Sim' : 'Não'}}</p>
    <p><strong>Língua:</strong>{{ $route.query.lingua}}</p>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>