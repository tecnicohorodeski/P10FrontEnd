<script>
import ProdutosOfertas from '../components/HomeView/ProdutosOfertas.vue'
import PromocaoSection from '../components/HomeView/PromocaoSection.vue'
import ProdutosCategoria from '../components/HomeView/ProdutosCategoria.vue'
export default {
  components: { ProdutosOfertas, PromocaoSection, ProdutosCategoria }
}
</script>

<template>
  <main>
    <div class="container">
      <p>BAIXE O APP E APROVEITE OFERTAS EXCLUSIVAS</p>
      <box-icon color="#fff" size="md" name="chevron-right"></box-icon>
    </div>
    <ProdutosOfertas />
    <div class="divulgacao">
      <img src="src/assets/img/celular.png" alt="" />
    </div>
    <ProdutosCategoria />
    <ProdutosOfertas />
    <promocaoSection />
    <ProdutosOfertas />

  </main>
</template>
<style scoped>


</style>
