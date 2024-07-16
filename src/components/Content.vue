<template>
  <Filters @update:milk="handleMilkOptionsUpdate" @update:categories="handleCategoriesUpdate" :searching="searching" />
  <!-- Mobile menu -->
  <main>
    <!-- Hero section -->
    <HeroHome v-if="!searching && !noItems" />
    <div class="bg-polka-dots">
      <!-- Items listed by category or filter -->
      <div v-if="noItems" class="p-8">
        <div class="flex flex-col items-center justify-center mt-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">No results matched your search for "{{ searchQuery }}"</h1>
          <p class="text-xl text-gray-600 mb-2">We apologize for the inconvenience. Please try again with different keywords.</p>
          <p v-if="searchQuery.split(' ').length > 1" class="text-xl text-gray-600">Try your search with fewer words to get better results.</p>
        </div>      </div>
      <div v-else-if="searching">
        <section aria-labelledby="items-listed">
          <div
            class="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4 py-6 sm:px-6 sm:mt-12 lg:px-8 lg:mt-12 bg-inherit -pt-24">
            <div class="md:flex md:items-center md:justify-between">
              <h2 id="favorites-heading" class="text-4xl font-bold tracking-tight text-gray-700">
                This is what we found for "{{ searchQuery }}"
              </h2>
            </div>
            <div
              class="mt-6 opacity-9 grid grid-cols-1 gap-y-10 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-x-0 justify-items-center">
              <ItemCards :items="displayResults" :itemCurrency="itemCurrency" @openModal="openModal" />
            </div>
          </div>
        </section>
      </div>
      <div v-else>
        <div v-for="category in filteredCategories" class="bg-inherit">
          <section v-if="getFilteredAndSortedItems(category.name).length > 0" aria-labelledby="items-listed"
            :id="`${category.name}`">
            <div
              class="mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-4 py-6 sm:px-6 sm:mt-12 lg:px-8 lg:mt-12 bg-inherit -pt-24">
              <div class="md:flex md:items-center md:justify-between">
                <h2 id="favorites-heading" class="text-4xl font-bold tracking-tight text-gray-700">
                  {{ category.name }}
                </h2>
              </div>
              <div
                class="mt-6 opacity-9 grid grid-cols-1 gap-y-10 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 lg:gap-x-0 justify-items-center">
                <ItemCards :items="getFilteredAndSortedItems(category.name)" :itemCurrency="itemCurrency"
                  @openModal="openModal" />
              </div>
            </div>
            <div v-if="getFilteredAndSortedItems(category.name, Infinity).length > 6" class="mt-4">
              <RouterLink :to="`/categories/category/${category.name.toLowerCase()}`"
                class="text-blue-600 hover:text-blue-800">
                View all {{ category.name }}
              </RouterLink>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Perks />
    <ItemDialog :isOpen="open" :item="selectedItem" :itemCurrency="itemCurrency" @update:isOpen="open = $event" />
  </main>
</template>

<script setup>
import Filters from './Filters.vue';
import HeroHome from './HeroHome.vue';
import ItemCards from './ItemCards.vue';
import ItemDialog from './ItemDialog.vue';
import Perks from './Perks.vue';
import { ref, computed, watch, inject, onMounted, onUnmounted } from 'vue';
import itemsData from '@/assets/data/items.json';
import categoriesData from '@/assets/data/categories.json';
import { RouterLink } from 'vue-router';

const items = ref(itemsData)
const categories = ref(categoriesData)

const currencyState = inject('currencyState', () => ('$'));

const itemCurrency = computed(() => currencyState.selectedCurrency);

const selectedCategories = ref([])
const selectedMilkOptions = ref("")
const searchResults = inject('searchResults');
const searchQuery = inject('searchQuery');
const displayResults = ref([]);
const searching = ref(false);
const searchNoItems = ref(false);

const heroImageContainer = ref(null);

function handleMilkOptionsUpdate(options) {
  selectedMilkOptions.value = options;
  console.log(selectedMilkOptions.value)
}

function handleCategoriesUpdate(categories) {
  selectedCategories.value = categories;
  if (selectedCategories.value.length > 0) {
    console.log(selectedCategories.value)
  }
}

watch(searchResults, (newVal) => {
  searching.value = true;
  if (newVal.length > 0) {
    // Iterate through all fuse results and extract items
    displayResults.value = newVal.map(result => result.item);
    console.log('Results: ', displayResults.value)
    searchNoItems.value = false;
    console.log('searchNoItems: ', searchNoItems.value);
    console.log('searching: ', searching.value);
  } else {
    searchNoItems.value = true;
  }
})

const filteredCategories = computed(() => {
  if (!categories.value) return [];
  // returns all categories if no categories are selected
  // and if categories are selected, returns only the selected categories
  return categories.value.filter(category => {
    if (selectedCategories.value.length > 0) {
      return selectedCategories.value.some(selectedCategory =>
        selectedCategory.name === category.name
      );
    } else {
      return true
    }
  })
})
function getFilteredAndSortedItems(category) {
  if (!items.value) return [];
  let itemsReturned = items.value.filter(item => {
    let matchesMilkCriteria = true;
    if (selectedMilkOptions.value == "Parve") {
      matchesMilkCriteria = item.milk === false;
    } else if (selectedMilkOptions.value === "Milk") {
      matchesMilkCriteria = item.milk === true;
    }

    // Check if the item's category matches the current category
    let isInCategory = item.description.category.includes(category);
    return isInCategory && matchesMilkCriteria;
  });
  return itemsReturned.slice(0, 6);
}
/**
 * Checks if according to selected categories and filter there are no items
 * @requires filteredCategories
 * @requires getFilteredAndSortedItems
 * @returns boolean
 */
const noItems = computed(() => {
  if (!filteredCategories.value) return true;
  if (searchNoItems.value) {
    return true;
  }
  for (let category of filteredCategories.value) {
    let items = getFilteredAndSortedItems(category.name);
    if (items.length > 0) {
      return false;
    }
  }
  return true;
})

const open = ref(false)
const selectedItem = ref(null)

function openModal(item) {
  console.log('open')
  selectedItem.value = item
  open.value = true
}

// Hero section effect
const handleScroll = () => {
  if (heroImageContainer.value) {
    const scrollPosition = window.scrollY;
    heroImageContainer.value.style.transform = `translateY(${scrollPosition * 0.25}px)`;
  }
}

onMounted(() => {
  heroImageContainer.value = document.querySelector('.hero-image')
  window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})


</script>


<style scoped>
.store-bg {
  background-color: #F9FAFB;
  opacity: 0.8;
  background-image: radial-gradient(#FDE68A 0.5px, transparent 0.5px), radial-gradient(#FDE68A 0.5px, #F9FAFB 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>