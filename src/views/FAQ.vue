<template>
    <Header :noSearchBar="true" :noCurrencySelector="true"></Header>
    <FaqContent></FaqContent>
    <Footer></Footer>
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '../components/Footer.vue';
    import FaqContent from '@/components/FaqContent.vue'
</script>