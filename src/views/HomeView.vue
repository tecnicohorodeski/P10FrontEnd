<script>
import ProdutosComp from '../components/HomeView/ProdutosComp.vue'
import PromocaoSection from '../components/HomeView/PromocaoSection.vue'
import ProdutosAlta from '../components/HomeView/ProdutosAlta.vue'
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
    <ProdutosAlta />
    <promocaoSection />
  </main>
</template>
<style scoped>

main .alerta {
  background-color: var(--cor-primaria);
  width: 100%;
  padding: 10px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
}
</style>
