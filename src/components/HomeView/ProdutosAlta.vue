<script>
import CardProduto from '../common/CardProduto.vue'
export default { components: { CardProduto } }
</script>
<template>
  <section class="produtos">
    <div class="categoria">
      <box-icon type="solid" name="offer"></box-icon>
      <h2>OFERTAS DO DIA</h2>
    </div>
    <div class="produtos-alta">
      <div id="card-maior" class="card-produto">
        <img
          src="https://m.media-amazon.com/images/I/71dncPbANKL._AC_SX425_.jpg"
          alt=""
        />
        <h3 class="nome-produto">Cartucho de tinta de alto rendimento preto original HP 67XL | Funciona com HP DeskJet 1255, 2700, série 4100, HP ENVY 6000, 6400 | Elegível para tinta instantânea | 3YM57AN</h3>
        <div class="preco">
          <h3>R$9,99</h3>
          <h3 class="preco-antigo">R$15,00</h3>
        </div>
      </div>
      <div class="lista-produtos">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
  </section>
</template>
