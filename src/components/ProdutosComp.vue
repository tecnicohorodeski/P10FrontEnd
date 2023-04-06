<script>
import CardProduto from './CardProduto.vue'
import VueScrollSnap from "vue-scroll-snap";

export default { components: { CardProduto, VueScrollSnap } }
</script>
<template>
  <section class="produtos">
    <div class="categoria">
      <box-icon type="solid" name="offer"></box-icon>
      <h2>OFERTAS DO DIA</h2>
    </div>
    <div>
      <vue-scroll-snap :horizontal="true">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </vue-scroll-snap>
    </div>
  </section>
</template>
