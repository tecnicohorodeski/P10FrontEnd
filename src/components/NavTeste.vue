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
      <div>
        <router-link class="logo" to="/">
          <h1>P10</h1>
        </router-link>
      </div>
      <div class="pesquisa">
        <input placeholder="O que você está procurando?" type="text" />
        <div class="lupa">
          <box-icon name="search-alt"></box-icon>
        </div>
      </div>
      <div class="user-carrinho">
        <div>
          <box-icon size="lg" class="cesta-responsiva-lg" name="basket"></box-icon>
          <box-icon size="md" class="cesta-responsiva-md" name="basket"></box-icon>
        </div>
        <div class="user">
          <img src="@/assets/img/eduardo.jpeg" alt="" />
          <h3>edudasilva</h3>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li><h4>Em destaque</h4></li>
          <li><a href="#">Descontos</a></li>
          <li><a href="#">Mercado</a></li>
          <li><a href="#">Livraria</a></li>
          <li><h4>Todas as categorias</h4></li>
          <li><a href="#">Papelaria</a></li>
          <li><a href="#">Brinquedos</a></li>
          <li><a href="#">Limpeza</a></li>
          <li><a href="#">Casa</a></li>
          <li><a href="#">Roupas</a></li>
          <li class="perfil-li">
            <div class="perfil">
              <img src="@/assets/img/eduardo.jpeg" alt="" />
              <h4>edudasilva</h4>
            </div>
          </li>
        </ul>
      </div>
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
