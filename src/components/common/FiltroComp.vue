<script>
export default {}
</script>

<template>
  <div class="filtro">
    <div class="row-1">
      <!--mudar as cores-->
      <div>
        <box-icon size="4em" type='solid' name='offer'></box-icon>
        <h3>Em oferta</h3>
      </div>
      <div>
        <box-icon size="4em" type='solid' name='badge-dollar'></box-icon>
        <h3>Mais vendidos</h3>
      </div>
      <div>
        <box-icon size="4em" name='cart-download' type='solid'></box-icon>
        <h3>Menor preço</h3>
      </div>
      <div>
        <box-icon size="4em" name='plus-medical'></box-icon>
        <h3>Novidades</h3>
      </div>

    </div>
    <div class="row-2">

    </div>
  </div>
</template>

<style scoped>
.row-1 {
  display: flex;
  justify-content: space-evenly;
}
.row-1 div {
  display: flex;
  flex-direction: column;
  align-items: center;  
}
</style>
