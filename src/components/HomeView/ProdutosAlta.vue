<script setup>
import CardProduto from '../common/CardProduto.vue'
const brinquedos = [
  {
    id: 1,
    NomeProduto: 'Quebra Cabeça Numerais E Símbolos Matemática Educativo Madeira',
    PrecoAntigo: 34.9,
    PrecoNovo: 6.87,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/81U1YA-9EZL._AC_SL1500_.jpg'
  },
  {
    id: 1,
    NomeProduto: 'Quebra Cabeça Numerais E Símbolos Matemática Educativo Madeira',
    PrecoAntigo: 34.9,
    PrecoNovo: 6.87,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/81U1YA-9EZL._AC_SL1500_.jpg'
  },
  {
    id: 1,
    NomeProduto: 'Quebra Cabeça Numerais E Símbolos Matemática Educativo Madeira',
    PrecoAntigo: 34.9,
    PrecoNovo: 6.87,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/81U1YA-9EZL._AC_SL1500_.jpg'
  },
  {
    id: 1,
    NomeProduto: 'Quebra Cabeça Numerais E Símbolos Matemática Educativo Madeira',
    PrecoAntigo: 34.9,
    PrecoNovo: 6.87,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/81U1YA-9EZL._AC_SL1500_.jpg'
  }
]
</script>
<template>
  <div class="categoria">
    <box-icon type="solid" name="offer"></box-icon>
    <h2>NAVEGUE POR CATEGORIAS</h2>
  </div>
  <section class="produtos">
    <div class="brinquedos">
      <h3>Brinquedos</h3>
      <div>
        <CardProduto
          v-for="brinquedo of brinquedos"
          :key="brinquedo.id"
          :NomeProduto="brinquedo.NomeProduto"
          :PrecoAntigo="brinquedo.PrecoAntigo"
          :PrecoNovo="brinquedo.PrecoNovo"
          :CaminhoImagem="brinquedo.CaminhoImagem"
        />
      </div>
    </div>
    <div class="brinquedos">
      <h3>JARDINAGEM E FERRAMENTAS MANUAIS</h3>
      <div>
        <CardProduto
          v-for="brinquedo of brinquedos"
          :key="brinquedo.id"
          :NomeProduto="brinquedo.NomeProduto"
          :PrecoAntigo="brinquedo.PrecoAntigo"
          :PrecoNovo="brinquedo.PrecoNovo"
          :CaminhoImagem="brinquedo.CaminhoImagem"
        />
      </div>
    </div>
    <div class="brinquedos">
      <h3>Casas</h3>
      <div>
        <CardProduto
          v-for="brinquedo of brinquedos"
          :key="brinquedo.id"
          :NomeProduto="brinquedo.NomeProduto"
          :PrecoAntigo="brinquedo.PrecoAntigo"
          :PrecoNovo="brinquedo.PrecoNovo"
          :CaminhoImagem="brinquedo.CaminhoImagem"
        />
      </div>
    </div>
    <div class="brinquedos">
      <h3>ORGANIZADORES</h3>
      <div>
        <CardProduto
          v-for="brinquedo of brinquedos"
          :key="brinquedo.id"
          :NomeProduto="brinquedo.NomeProduto"
          :PrecoAntigo="brinquedo.PrecoAntigo"
          :PrecoNovo="brinquedo.PrecoNovo"
          :CaminhoImagem="brinquedo.CaminhoImagem"
        />

      </div>
    </div>
  </section>
</template>
<style scoped>
.produtos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}
.produtos .brinquedos {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  background-color: #80808012;
  justify-content: center;
}
</style>
