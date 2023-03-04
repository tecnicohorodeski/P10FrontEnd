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
      <div class="logo">
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
    </div>
    <div class="navegacao">
      <div class="dropdown">
        <button class="dropbtn">TODAS AS CATEGORIAS</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <ul>
        <li>
          <a href="">DESCONTOS</a>
        </li>
        <li>
          <a href="">MERCADO</a>
        </li>
        <li>
          <a href="">LIVRARIA</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
