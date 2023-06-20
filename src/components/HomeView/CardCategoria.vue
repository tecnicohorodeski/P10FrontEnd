<script>
export default {
  props: {
    CaminhoImagem: String,
    NomeProduto: String,
  }
}
</script>
<template>
  <div class="card-produto">
    <img v-bind:src="CaminhoImagem" />
    <h4 class="nome-produto">{{ NomeProduto }}</h4>

  </div>
</template>
<style scoped>
.card-produto {
  width: 36%;
  display: flex;
  margin: 5px 6px;
  border-radius: 5px;
  padding: 5px;
  background-color: #80808012;
  flex-direction: column;
  justify-content: center;
}

.card-produto .preco-antigo {
  font-size: 0.9em;
  margin-left: 5px;
  color: #a7a7a7;
  text-decoration-line: line-through;
  text-decoration-color: var(--cor-primaria);
}

.card-produto .nome-produto {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-produto img {
  border-radius: 5px;
  width: 100%;
}

</style>
