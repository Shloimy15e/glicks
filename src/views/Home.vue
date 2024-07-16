<script setup>
import { reactive, provide, ref } from 'vue';
import Header from '../components/Header.vue';
import Content from '../components/Content.vue';
import Footer from '../components/Footer.vue';

const currencyState = reactive({
  selectedCurrency: '₪'
})

const searchResults = ref([])
const searchQuery = ref('')

provide('currencyState', currencyState)
provide('searchResults', searchResults)
provide('searchQuery', searchQuery)
</script>

<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>