<template>
  <TransitionRoot :show="isOpen" as="template" v-if="isOpen">
    <Teleport to="body">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
            <div class="fixed inset-0 bg-black/25 backdrop-blur-lg" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-2 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full h-min max-w-md transform overflow-hidden rounded-2xl bg-white p-2 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  <swiper
                    slides-per-view="1"
                    speed="1000"
                    loop="true"
                    class="aspect-1.5 w-full"
                    effect="slide"
                    :autoplay="{
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }"
                  >
                    <swiper-slide
                      v-for="(image, index) in item.images"
                      :key="index"
                    >
                      <img
                        :src="`/images/${image}`"
                        alt="Slide image"
                        class="rounded-t-xl h-full w-auto object-cover aspect-1.5"
                      />
                    </swiper-slide>
                  </swiper>
                  <h3 class="mt-4 text-xl text-gray-700">
                    {{ item?.name }}
                  </h3>
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ item.description.text }}
                  </p>
                </div>
                <!-- <div class="mt-4 flex items-center gap-2">
                  <h4 class="text-black font-semibold">Allergens:</h4>
                  <p
                    class="text-gray-600 flex items-center justify-start"
                    v-for="allergen in item.description.allergens"
                  >
                    {{ allergen }}
                  </p>
                  ,
                </div> -->
                <div class="flex item justify-center">
                  <p
                    class="text-xl px-2 font-medium text-gray-900 border border-primary-red"
                  >
                    {{ itemCurrency }} {{ item.price[itemCurrency] }}
                  </p>
                </div>
                <!-- Categories rendered as mini cards -->
                <div class="flex items-center justify-start">
                  <p
                    class="text-sm font-semibold text-gray-50 w-min h-min px-1 py-0.5 m-2 rounded-md flex items-center"
                    :class="item.milk ? 'bg-blue-500' : 'bg-green-500'"
                  >
                    {{ item.milk ? "Milk" : "Pareve" }}
                  </p>
                  <p
                    v-for="tag in item.description.tags"
                    class="text-sm font-semibold text-primary-brown bg-beige-0 w-min h-min px-1 py-0.5 m-2 rounded-md flex items-center"
                  >
                    {{ tag }}
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Teleport>
  </TransitionRoot>
</template>

<script setup>
import { onMounted } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

const props = defineProps({
  isOpen: Boolean,
  item: Object,
  itemCurrency: String,
});
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const emit = defineEmits(["update:isOpen"]);

function closeModal() {
  emit("update:isOpen", false);
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