<script setup>
import { RouterView, RouterLink } from 'vue-router'
import NavTeste from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <NavTeste />
  <RouterView />
  <FooterComp />
</template>

<style scoped></style>
