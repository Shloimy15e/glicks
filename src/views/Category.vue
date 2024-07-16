<template>
  <div>
    <Header :noSearchBar="true"></Header>
    <CategoryContent></CategoryContent>
    <Footer></Footer>
  </div>  
</template>

<script setup>
import Header from '@/components/Header.vue';
import CategoryContent from '@/components/CategoryContent.vue';
import Footer from '@/components/Footer.vue';
import { provide, reactive } from 'vue';

const currencyState = reactive({
  selectedCurrency: '₪'
})
provide('currencyState', currencyState)
</script>