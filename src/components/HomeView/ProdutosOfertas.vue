<script setup>
import CardProduto from '../common/CardProduto.vue'
import VueScrollSnap from 'vue-scroll-snap'
const produtos = [
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
  {
    id: 1,
    NomeProduto:
      'Gua Sha Ferramenta de Massagem para Jade Stone para Massageador Facial Raspador de Pele Jade Natural Jade Gua Sha Board para Rosto e Corpo (Verde Escuro)',
    PrecoAntigo: 100.0,
    PrecoNovo: 5.50,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61umOqRewKL._AC_SX679_.jpg'
  },
  {
    id: 2,
    NomeProduto:
      'Bozony Máquina de barbear careca elétrica para homens 7 cabeças flutuantes barba aparador de cabelo limpador facial massageador aparador de nariz totalmente lavável USB recarregável',
    PrecoAntigo: 163.99,
    PrecoNovo: 4.00,
    CaminhoImagem: 'https://m.media-amazon.com/images/I/61f08SGFOcL._AC_SX569_.jpg'
  },
]
</script>
<template>
  <section class="produtos">
    <div class="categoria">
      <box-icon type="solid" name="offer"></box-icon>
      <h2>OFERTAS DO DIA</h2>
    </div>
    <div>
      <vue-scroll-snap :horizontal="true">
        <CardProduto
          v-for="produto of produtos"
          :key="produto.id"
          :NomeProduto="produto.NomeProduto"
          :PrecoAntigo="produto.PrecoAntigo"
          :PrecoNovo="produto.PrecoNovo"
          :CaminhoImagem="produto.CaminhoImagem"
          />
      </vue-scroll-snap>
    </div>
  </section>
</template>
