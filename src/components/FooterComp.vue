<script>
export default {}
</script>
<template>
  <footer>
    <div class="informacoes">
      <div class="links">
        <h3>Informações da empresa</h3>
        <a href="#">Sobre P10</a>
        <a href="#">Sustentabilidade e impactos</a>
        <a href="#">Carreiras</a>
        <a href="#">Blog</a>
        <a href="#">P10 aplicativo</a>
      </div>
      <div class="links">
        <h3>Ajuda e suporte</h3>
        <a href="#">Política De Frete</a>
        <a href="#">Devolução</a>
        <a href="#">Como Pedir</a>
        <a href="#">Como Rastrear</a>
        <a href="#">Guia De Tamanhos</a>
      </div>
      <div class="links">
        <h3>Atendimento ao cliente</h3>
        <a href="#">Contate-Nos</a>
        <a href="#">Método De Pagamento</a>
        <a href="#">Pontos Bônus</a>
      </div>
    </div>
    <div class=rede-sociais>
        <router-link class="logo" to="/">
          <h1>P10</h1>
        </router-link>
        <div>
            <box-icon size="lg" type='logo' name='twitter'></box-icon>
            <box-icon size="lg" name='instagram' type='logo' ></box-icon>
            <box-icon size="lg" name='facebook-circle' type='logo' ></box-icon>
        </div>
    </div>
    <div class="github">
        <box-icon name='github' size="md" color="#fff" type='logo' ></box-icon>
    </div>
  </footer>
</template>
