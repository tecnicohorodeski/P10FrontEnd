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
          <!--           <img src="../assets/img/logo.png" /> -->
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
          <li>
            <h4>Em destaque</h4>
          </li>
          <li><a href="#">Descontos</a></li>
          <li><a href="#">Mercado</a></li>
          <li><a href="#">Livraria</a></li>
          <li>
            <h4>Todas as categorias</h4>
          </li>
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
<style scoped>
nav {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

nav ul {
  display: flex;
  list-style: none;
  flex-wrap: nowrap;
  align-items: center;
}

nav ul li {
  margin: 0 5px;
}

nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

nav .coisas-da-loja {
  background-color: black;
  width: 100%;
}

nav .coisas-da-loja ul {
  height: 5vh;
  justify-content: space-evenly;
}

nav .coisas-da-loja ul a {
  color: white;
  font-weight: 800;
  font-size: 1.1em;
  text-decoration: none;
}

nav .nav-principal {
  height: 11vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}


nav .nav-principal .logo h1 {
  font-weight: 900;
}

nav .nav-principal .pesquisa {
  display: flex;
  width: 47%;
}

nav .nav-principal .pesquisa input {
  width: 100%;
  border-top-left-radius: 15px;
  padding-left: 10px;
  font-size: 1em;
  border-bottom-left-radius: 15px;
  border-color: black;
}

nav .nav-principal .pesquisa .lupa {
  background-color: var(--cor-primaria);
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

nav .nav-principal .user-carrinho {
  display: flex;
  align-items: center;
}

nav .nav-principal .user-carrinho ul {
  display: none;
}

nav .nav-principal .user-carrinho .user {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

nav .nav-principal .user-carrinho .user img {
  margin-right: 10px;
  width: 50px;
  border-radius: 15px;
}

nav .nav-principal .user-carrinho .menu-btn i {
  color: #000000;
  font-size: 2em;
  cursor: pointer;
  display: none;
}

nav .navegacao {
  background-color: var(--cor-primaria);
  width: 100%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 7vh;
}

nav .navegacao ul li a {
  font-weight: 700;
  font-size: 1.1em;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  ;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #80808012;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown .dropbtn {
  background-color: #bb000000;
  color: white;
  border: none;
  color: white;
  padding: 10px;
  font-weight: 700;
  font-size: 1.1em;
  text-decoration: none;
  cursor: pointer;
}

.dropdown-responsivo {
  display: none;
  position: relative;
}

input[type="checkbox"] {
  display: none;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  width: 100%;
  padding: 0 30px;
}

.content div {
  font-size: 40px;
  font-weight: 700;
}


.cesta-responsiva-md {
  display: none;
}
</style>