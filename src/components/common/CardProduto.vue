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
  <router-link to="/produto">
    <div class="card-produto">
      <img v-bind:src="CaminhoImagem" />
      <h4>{{ NomeProduto }}</h4>
      <div>
        <h3>R${{ PrecoNovo }}</h3>
        <h3 class="preco-antigo">R${{ PrecoAntigo }}</h3>
      </div>
    </div>
  </router-link>
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
  height: 40vh;
  justify-content: center;
}
a {
  text-decoration: none;
  color: black  ;
}
.card-produto .div {
  display: flex;
  align-items: center;
}

.preco-antigo {
  font-size: 0.9em;
  margin-left: 5px;
  color: #a7a7a7;
  text-decoration-line: line-through;
  text-decoration-color: var(--cor-primaria);
}

h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

img {
  border-radius: 5px;
  width: 100%;
}
</style>
