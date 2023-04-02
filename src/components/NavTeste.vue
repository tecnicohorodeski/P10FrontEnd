<script>
export default {}
</script>
<template>
  <nav>
    <div class="coisas-da-loja">
      <ul>
        <li><a href="">SAC</a></li>
        <li><a href="">TRABALHE CONOSCO</a></li>
        <li><a href="">DISQUE DENÚNCIA</a></li>
        <li><a href="">LOJAS</a></li>
      </ul>
    </div>
    <div class="nav-principal">
      <div id="logo-responsiva-meio" class="logo">
        <h1>P10</h1>
      </div>
      <div class="pesquisa">
        <input type="text" />
        <div class="lupa">
          <box-icon name="search-alt"></box-icon>
        </div>
      </div>
      <div class="user-carrinho">
        <div>
          <box-icon size="lg" name="cart-alt"></box-icon>
        </div>
        <div class="user">
          <img src="@/assets/img/eduardo.jpeg" alt="" />
          <h3>edudasilva</h3>
        </div>
      </div>

      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
    </div>
    <div class="navegacao">
      <div class="dropdown">
        <button class="dropbtn">
          TODAS AS CATEGORIAS
          <box-icon name="down-arrow" size="xs" type="solid" color="#ffffff"></box-icon>
        </button>
        <div class="dropdown-content">
          <a href="#">Papalaria</a>
          <a href="#">Brinquedos</a>
          <a href="#">Limpeza</a>
          <a href="#">Casa</a>
          <a href="#">Roupas</a>
        </div>
      </div>
      <div class="dropdown-responsivo">
        <button class="dropbtn">
          MENU
          <box-icon name="down-arrow" size="xs" type="solid" color="#ffffff"></box-icon>
        </button>
        <div class="dropdown-responsivo-content">
          <div class="dropdown-responsivo-esquerda">
            <h4>Categorias</h4>
            <a href="#">Papalaria</a>
            <a href="#">Brinquedos</a>
            <a href="#">Limpeza</a>
            <a href="#">Casa</a>
            <a href="#">Roupas</a>
          </div>
          <div class="dropdown-responsivo-meio">
            <h4>Em destaque</h4>
            <a href="#">Descontos</a>
            <a href="#">Mercado</a>
            <a href="#">Livraria</a>
          </div>
          <div class="dropdown-responsivo-direita">
            <h4>Atendimento</h4>
            <a href="#">SAC</a>
            <a href="#">Trabalhe conosco</a>
            <a href="#">Disque denúncia</a>
            <a href="#">Lojas</a>
          </div>
        </div>
      </div>
      <ul>
        <li><a href="#">DESCONTOS</a></li>
        <li><a href="#">MERCADO</a></li>
        <li><a href="#">LIVRARIA</a></li>
      </ul>
    </div>
  </nav>
</template>
