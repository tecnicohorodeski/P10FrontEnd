<script setup>
import CardProduto from '../common/CardProduto.vue'
const produtos = [
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
  <section>
    <div class="categoria">
      <box-icon type="solid" name="offer"></box-icon>
      <h2>NAVEGUE POR CATEGORIAS</h2>
    </div>
    <div class="produtos">
      <div class="card-categorias">
        <h3>KITS DE CONSTRUIR E MONTAR</h3>
        <div class="produtos-container">
          <CardProduto
            v-for="produto of produtos"
            :key="produto.id"
            :NomeProduto="produto.NomeProduto"
            :PrecoAntigo="produto.PrecoAntigo"
            :PrecoNovo="produto.PrecoNovo"
            :CaminhoImagem="produto.CaminhoImagem"
          />
        </div>
      </div>
      <div class="card-categorias">
        <h3>JARDINAGEM E FERRAMENTAS MANUAIS</h3>
        <div class="produtos-container">
          <CardProduto
            v-for="produto of produtos"
            :key="produto.id"
            :NomeProduto="produto.NomeProduto"
            :PrecoAntigo="produto.PrecoAntigo"
            :PrecoNovo="produto.PrecoNovo"
            :CaminhoImagem="produto.CaminhoImagem"
          />
        </div>
      </div>
      <div class="card-categorias">
        <h3>Casas</h3>
        <div class="produtos-container">
          <CardProduto
            v-for="produto of produtos"
            :key="produto.id"
            :NomeProduto="produto.NomeProduto"
            :PrecoAntigo="produto.PrecoAntigo"
            :PrecoNovo="produto.PrecoNovo"
            :CaminhoImagem="produto.CaminhoImagem"
          />
        </div>
      </div>
      <div class="card-categorias">
        <h3>ORGANIZADORES</h3>
        <div class="produtos-container">
          <CardProduto
            v-for="produto of produtos"
            :key="produto.id"
            :NomeProduto="produto.NomeProduto"
            :PrecoAntigo="produto.PrecoAntigo"
            :PrecoNovo="produto.PrecoNovo"
            :CaminhoImagem="produto.CaminhoImagem"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.categoria {
  display: flex;
  align-items: center;
}
.produtos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}
.produtos .card-categorias {
  display: flex;
  justify-content: center;
  padding: 15px;
  align-items: center;
  width: 48%;
  margin-bottom: 15px;
  background-color: #80808012;
  flex-direction: column;
}
.produtos .produtos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
