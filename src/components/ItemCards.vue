<template>
  <div
    class="mt-6 opacity-9 grid grid-cols-1 gap-y-10 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-x-0 justify-items-center"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="group relative bg-white w-5/6 aspect-1 rounded-xl shadow-md pb-3 transition hover:scale-105 hover:cursor-pointer duration-300"
      @click="openModal(item)"
    >
      <swiper
        slides-per-view="1"
        speed="1000"
        loop="true"
        class="aspect-1.5 w-full"
        effect="slide"
        :autoplay="{ disableOnInteraction: false, pauseOnMouseEnter: true }"
      >
        <swiper-slide v-for="(image, index) in item.images" :key="index">
          <img
        :src="`/images/${image}`"
        alt="Slide image"
        class="rounded-t-xl h-full w-auto object-cover aspect-1.5"
          />
        </swiper-slide>
      </swiper>
      <h3 class="mt-4 text-lg">
        <a type="button" class="text-primary-brown hover:text-brown-2">
          <span class="absolute inset-0"></span>
          {{ item.name }}
        </a>
      </h3>
      <p class="mt-1 text-lg font-medium text-gray-900">
        {{ itemCurrency + item.price[itemCurrency] }}
      </p>
    </div>
  </div>
</template>

<script setup>
// import Swiper styles
import { Swiper } from "swiper/vue";
import { SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { onMounted, nextTick } from "vue";

const props = defineProps({
  items: Array,
  itemCurrency: String,
});

/* const swiperParams = {
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: usePage().props.locale === "he",
  },
  pagination: {
    clickable: true,
  },
  speed: 1000,
};

const swiperSlideParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
};
 const breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
}; */

// Emit openModal
const emit = defineEmits(["openModal"]);

function openModal(item) {
  emit("openModal", item);
}
</script>

<style>
.swiper {
  --swiper-navigation-size: 20px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 6px;
  --swiper-navigation-color: #ef466370;

  --swiper-pagination-bottom: 4px;
  --swiper-pagination-bullet-inactive-color: theme("colors.white");
  --swiper-pagination-color: theme("colors.black");
}
</style>
