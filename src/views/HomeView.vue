<script>
import ProdutosComp from '../components/ProdutosComp.vue';
export default {
  components: { ProdutosComp },};
</script>

<template>
  <main>
    <div class="alerta">
      <p>BAIXE O APP E APROVEITE OFERTAS EXCLUSIVAS</p>
      <box-icon color="#fff" size="md" name='chevron-right'></box-icon>
    </div>
    <ProdutosComp />
    <div class="divulgacao">
      <img src="src/assets/img/celular.png" alt=""> 
    </div>
    <ProdutosComp />
    <ProdutosComp />
    <ProdutosComp />
    <ProdutosComp />
    <ProdutosComp />
  </main>
</template>
