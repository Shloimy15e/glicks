<template>
  <div class="grid-cols-1 grid-flow-row transition-all">
    <div class="items-center w-full mx-auto rounded-full sm:rounded-full bg-gray-50 border has-[:focus]:border-2 border-gray-300 flex has-[:focus]:ring-1 has-[:focus]:ring-beige-2 has-[:focus]:border-white has-[:focus]:shadow-md hover:shadow-md duration-200">
      <input type="search" class="w-full h-10 sm:h-12 px-4 bg-inherit text-gray-800 rounded-full focus:outline-none "
        placeholder="search" v-model="search"
        :title="(search.length > 0) ? 'Search all items' : 'Type something to enable search button'"
        @keyup.enter="search.length > 0 ? handleSearch() : null"  />
      <div class="h-full">
        <button type="submit" @click="handleSearch"
          class="flex items-center justify-center w-12 h-full text-gray-500 rounded-r-full rounded-l-none bg-beige-2 hover:bg-beige-3 active:bg-beige-2 disabled:bg-primary-beige disabled:text-gray-350 transition-all"
          :title="(search.length > 0) ? 'Search' : 'Type something to enable the search button'"
          :disabled="search.length === 0">
          <div class=" w-36">
            <MagnifyingGlassIcon class="h-4 w-auto stroke-2" aria-hidden="true" />
          </div>
        </button>
      </div>
    </div>
    <span v-if="(search.length > 0)" class="text-gray-500 text-start ml-3 mt-0.5 transition-all">
      search for: {{ search }}
    </span>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import items from '@/assets/data/items.json'
import Fuse from 'fuse.js'

const itemsData = ref(items)
const search = ref('')
const searchResults = inject('searchResults')
const searchQuery = inject('searchQuery')

const handleSearch = async () => {
  const searchTerm = search.value.toLowerCase();
  // Define the search options
  const options = {
    keys: ['name', 'description.tags'],
    threshold: 0.2,
    includeScore: true,
};
  // Create a new Fuse instance
  const fuse = new Fuse(itemsData.value, options);

  // Perform the search
  const results = fuse.search(searchTerm).sort((a, b) => b.score - a.score);

  // log the results
  console.log('Search results: ', results);

  // Update the search results
  searchResults.value = results;
  // Update the search term
  searchQuery.value = search.value;
}
</script>