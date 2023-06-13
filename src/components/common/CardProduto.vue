<script>
export default {
  props: {
    CaminhoImagem: String,
    NomeProduto: String,
    PrecoNovo: Number,
    PrecoAntigo: Number
  }
}
</script>
<template>
  <div class="card-produto">
    <img v-bind:src="CaminhoImagem" />
    <h4 class="nome-produto">{{ NomeProduto }}</h4>
    <div class="preco">
      <h3>R${{ PrecoNovo }}</h3>
      <h3 class="preco-antigo">R${{ PrecoAntigo }}</h3>
    </div>
  </div>
</template>
<style scoped>
.card-produto {
  width: 225px;
  display: flex;
  margin: 5px 6px;
  border-radius: 5px;
  padding: 5px;
  background-color: #80808012;
  flex-direction: column;
  justify-content: center;
}
.card-produto .preco {
  display: flex;
  align-items: center;
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
