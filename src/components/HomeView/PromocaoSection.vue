<script>
import CardProduto from '../common/CardProduto.vue'

export default { components: { CardProduto } }
</script>
<template>
  <section class="produtos">
    <div class="promocao">
      <img src="src/assets/img/Promocao.png" alt="" />
      <div>

        <div class="produtos-promocao">
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
        </div>
      </div>
    </div>
  </section>
</template>
