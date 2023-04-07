<script>
import ProdutosComp from '../components/ProdutosComp.vue'
import PromocaoSection from '../components/PromocaoSection.vue'
import ProdutosAlta from '../components/ProdutosAlta.vue'
export default {
  components: { ProdutosComp, PromocaoSection, ProdutosAlta }
}
</script>

<template>
  <main>
    <div class="alerta">
      <p>BAIXE O APP E APROVEITE OFERTAS EXCLUSIVAS</p>
      <box-icon color="#fff" size="md" name="chevron-right"></box-icon>
    </div>
    <ProdutosComp />
    <div class="divulgacao">
      <img src="src/assets/img/celular.png" alt="" />
    </div>
    <ProdutosComp />
    <ProdutosAlta />
    <ProdutosComp />
    <promocaoSection />
    <ProdutosComp />
    <ProdutosComp />
  </main>
</template>
