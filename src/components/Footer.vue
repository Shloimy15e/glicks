<template>
  <div>
    <footer aria-labelledby="footer-heading" class="bg-white">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200 py-20">
          <!-- Image section -->
          <div class="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
            <img src="/public/favicon/favicon-glicks.png" alt="Secondary logo" class="h-12 w-auto rounded-full" />
          </div>

          <!-- Sitemap sections -->
          <div
            class="mt-10 ">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">

              <!-- Contact us for -->
              <div id="contact-us">
                <h3 class="text-lg font-medium text-gray-900">Contact us from anywhere</h3>
                <ul role="list" class="mt-6 space-y-6 flex flex-col items-center justify-center">
                  <li v-for="phonenumber in phonenumbers" :key="phonenumber.name" class="text-md">
                    <a :href="phonenumber.href"
                      class="text-gray-500 hover:text-amber-400 flex gap-2 justify-between w-48">
                      <span>{{ phonenumber.name }}:</span>
                      <span>{{ phonenumber.number }} </span>
                    </a>
                  </li>
                  <li class="w-52">
                    <p class="text-md text-gray-500 font-bold">
                      Please be advised that we accept phone orders only
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">Products</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.products" :key="item.name" class="text-base">
                    <RouterLink :to="item.to" class="text-gray-500 hover:text-gray-600 text-md">{{ item.name }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900">Helpful Links</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.customerService" :key="item.name" class="text-md">
                    <RouterLink :to="item.to" class="text-gray-500 hover:text-gray-600">{{ item.name }}</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-100 py-10 text-center">
        <p class="text-sm text-gray-500">&copy; 2024 Glicks Bakery, Inc. All rights reserved.</p>
        <br />
        <p class="text-sm text-gray-400">Built and designed by Shloimy Elbaum.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import phonenumbers from '@/assets/data/phonenumbers.json'

const footerNavigation = {
  products: [
    { name: 'Cakes', to: '/categories/category/cakes' },
    { name: 'Cookies', to: '/categories/category/cookies' },
    { name: 'Kedeishim platters', to: '/categories/category/kedeishim' },
    { name: 'Shabbos platters', to: '/categories/category/shabbos' },
  ],
  customerService: [
    { name: 'Delivery', to: '#' },
    { name: 'Secure Payment Options', to: '#' },
    { name: 'FAQ', to: '/faq' },
  ],
}
</script>