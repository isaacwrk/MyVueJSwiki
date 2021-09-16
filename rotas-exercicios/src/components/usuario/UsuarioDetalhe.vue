<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Codigo:</strong>{{id}}</p>
    <router-link tag="button" primario :to="`/usuario/${id}/editar`">
        Editar
    </router-link>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>