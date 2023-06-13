<script>
export default {
  props: {
    CaminhoImagem: String,
    NomeProduto: String,
    PrecoNovo: Number,
    PrecoAntigo: Number,
  },
};
</script>
<template>
    <div class="card-produto">
<!--         <button>botão que vai ficar acima dessa merda de imagem tipo o da amazon</button> -->
        <img v-bind:src="CaminhoImagem" />
        <h3 class="nome-produto">{{ NomeProduto }}</h3>
        <div class="preco">
            <h3>R${{ PrecoNovo }}</h3>
            <h3 class="preco-antigo">R${{ PrecoAntigo }}</h3>
        </div>
    </div>
</template>