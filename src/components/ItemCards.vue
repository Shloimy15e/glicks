<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="group relative bg-white w-5/6 aspect-1 rounded-xl shadow-md pb-3 transition hover:scale-105 hover:cursor-pointer duration-300"
  >
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          @click="openModal(item)"
          v-for="(image, index) in [item.imageSrc, item.imageSrc, item.imageSrc]"
          :key="index"
        >
          <img :src="`/images/${image}`" alt="Slide image" class=" rounded-t-xl" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <h3 class="mt-4 text-lg">
      <a
        @click="openModal(item)"
        type="button"
        class="text-primary-brown hover:text-brown-2"
      >
        <span class="absolute inset-0"></span>
        {{ item.name }}
      </a>
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ itemCurrency + item.price[itemCurrency] }}
    </p>
  </div>
</template>

<script setup>
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";

import { onMounted, nextTick } from "vue";

onMounted(() => {
  nextTick(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
});
const props = defineProps({
  items: Array,
  itemCurrency: String,
});

// Emit openModal
const emit = defineEmits(["openModal"]);

function openModal(item) {
  emit("openModal", item);
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
