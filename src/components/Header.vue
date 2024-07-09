<template>
  <header class="bg-white">
    <!-- Banner on top of nav that has location and contact info -->
    <div class="bg-gradient-to-r from-rose-400 to-rose-600 h-min">
      <div class=" flex items-center justify-between px-4 py-1 text-sm font-medium text-white">
        <p class="group hidden sm:flex items-center justify-start">
          <PhoneIcon class="fill-white stroke-gray-50 w-3" />
          <a v-for="(phonenumber, index) in phonenumbers" :href="phonenumber.href"
            class="text-white hover:text-amber-200 flex items-center"
            :class="index === 2 ? 'hidden lg:flex' : 'flex', index === 1 ? 'hidden md:flex' : 'flex'">
             {{ phonenumber.name }}: {{ phonenumber.number }} 
          </a>
        </p>
        <p class="hidden vsm:flex sm:hidden items-center justify-start group hover:cursor-pointer">
          <PhoneIcon class="fill-white stroke-inherit group-hover:fill-amber-200 w-3" /> 
          <a class="text-white group-hover:text-amber-200" href="#contact-us">Contact us</a>
        </p>
        <p>
          <span>
            <span class="flex text-white items-center">
              <TruckIcon class="w-5 stroke-2" /><span class="text-white text-xs sm:text-sm">&nbsp; We
                deliver to all areas in <span class=" text-amber-200">Yerushalayim.</span></span>
            </span>
          </span>
        </p>
      </div>
    </div>
    <!-- Header -->
    <nav class="flex items-center md:gap-10 justify-between py-2 lg:py-3 pl-1 lg:pl-2 pr-4 lg:pr-6"
      aria-label="Main navigation">
      <Logo class="min-w-min flex p-2 lg:p-2 xl:p-4">
        <RouterLink to="/" class="h-min flex items-center" @click.native="handleHomePageReload">
          <span class="sr-only">Glicks Bakery</span>
          <img
            class="h-20 md:h-26 lg:h-28 w-auto min-w-fit rounded-md lg:rounded-full p-0.5 border-solid border-2 border-rose-300"
            src="@/assets/images/logo-en2.jpg" alt="Glicks Bakery" />
          <span
            class="flex lg:hidden ml-2 md:pl-2 text-amber-700 text-xl xs:text-2xl md:text-4xl font-cherrySwashScript">Glicks
            Bakery</span>
        </RouterLink>
      </Logo>
      <!--Top nav items-->
      <div class="hidden lg:flex gap-0 lg:gap-24 xl:gap-14 justify-between">
        <RouterLink :to="item.to" v-for="item in navigation" :key="item.name"
          class="text-xl lg:text-2xl font-extrabold font-cherrySwashScript leading-6 h-min rounded-md py-3 px-2 lg:px-3 text-gray-900 hover:bg-amber-100 hover:text-black flex-shrink-0">
          {{ item.name }}
        </RouterLink>
      </div>
      <!--Search bar-->
      <Search class="hidden md:grid" v-if="!noSearchBar" />
      <!--Currency selector -->
      <label v-if="!noCurrencySelector" for="currency-selector" class="sr-only">Currency</label>
      <div v-if="!noCurrencySelector" class="mr-8 flex-shrink-0">
        <select id="currency-selector" name="currency-selector" @change="updateCurrency"
          class="text-2xl h-min w-auto aspect-1 rounded-full pb-1 px-1 text-gray-900 disabled:text-gray-500 hover:text-black bg-gray-200 hover:bg-amber-100 active:bg-amber-200 disabled:hover:bg-gray-200 flex-shrink-0 border-none focus-visible:outline-none">
          <option class="bg-gray-100 font-sans" v-for="currency in currencies" :key="currency">{{ currency }}
          </option>
        </select>
      </div>
      <!--Mobile menu button-->
      <div class="flex">
        <button type="button"
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-900 bg-gray-200 hover:bg-amber-100 active:bg-amber-200"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog @close="mobileMenuOpen = false">
        <TransitionChild as="template" enter="duration-500 ease-linear" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-500 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 z-10 bg-amber-950 bg-opacity-35" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="translate-x-full">
          <DialogPanel
            class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 max-w-xs sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <RouterLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Glicks Bakery</span>
                <img class="h-14 w-auto rounded-full" src="/favicon/favicon-glicks.png" alt="" />
              </RouterLink>
              <button type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-800 bg-gray-200 hover:bg-amber-100 active:bg-amber-200 active:border-none"
                @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <RouterLink :to="item.to" v-for="item in navigation" :key="item.name" @click="mobileMenuOpen = false"
                    class="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 bg-none hover:bg-amber-100 hover:text-black">
                    <component :is="item.icon" :size="22" :stroke-width="1.5" /> <span> {{ item.name }} </span>
                  </RouterLink>
                </div>
                <div class="py-6">
                  <a href="#contact-us" @click="mobileMenuOpen = false"
                    class="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-200 hover:text-black">
                    <PhoneIcon class="stroke-gray-900 group-hover:fill-amber-200 w-5" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </header>
</template>

<script setup>
import { inject, ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import phonenumbers from '@/assets/data/phonenumbers.json';
import Logo from './Logo.vue';
import Search from './Search.vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon, PhoneIcon, TruckIcon } from '@heroicons/vue/24/outline'
import { CakeSlice, Cookie, HouseIcon, HandPlatter } from 'lucide-vue-next';

const navigationData = {
  cakes: {
    name: "Cakes",
    to: "/categories/category/cakes",
    icon: CakeSlice
  },
  cookies: {
    name: "Cookies",
    to: "/categories/category/cookies",
    icon: Cookie
  },
  platters: {
    name: "Platters",
    to: "/categories/category/platters",
    icon: HandPlatter
  },
  home: {
    name: "Home - all items",
    to: "/",
    icon: HouseIcon
  }
}

const cakesNav = navigationData.cakes;
const cookiesNav = navigationData.cookies;
const plattersNav = navigationData.platters;
const homeNav = navigationData.home;

console.log(plattersNav);
const navigation = computed(() => {
  // If page name = Home
  if (router.currentRoute.value.name === 'home') {
    return [
      cakesNav,
      cookiesNav,
      plattersNav
    ]
  } else if (router.currentRoute.value.name === 'category-view') {
    if (router.currentRoute.value.params.categoryName === 'cakes') {
      return [
        homeNav,
        cookiesNav,
        plattersNav
      ]
    } else if (router.currentRoute.value.params.categoryName === 'cookies') {
      return [
        homeNav,
        cakesNav,
        plattersNav
      ]
    } else if (router.currentRoute.value.params.categoryName === 'platters') {
      return [
        homeNav,
        cakesNav,
        cookiesNav
      ]
    } else {
      return [
        cakesNav,
        cookiesNav,
        plattersNav
      ]
    }
  } else {
    return [
      homeNav,
      cakesNav,
      cookiesNav,
      plattersNav
    ]
  }
})

const currencies = ['₪', '$', '€', '£']

const currencyState = inject('currencyState')

function updateCurrency(event) {
  currencyState.selectedCurrency = event.target.value;
  console.log(currencyState.selectedCurrency)
}

const props = defineProps({
  noSearchBar: Boolean,
  noCurrencySelector: Boolean
})

const router = useRouter()

function handleHomePageReload(e) {
  if (router.currentRoute.value.name === 'home') {
    e.preventDefault();
    // Refresh the page
    router.go();
  }
}

const mobileMenuOpen = ref(false)
</script>