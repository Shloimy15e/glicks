<template>
  <div>
    <footer aria-labelledby="footer-heading" class="bg-gray-50">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200 py-20">
          <!-- Image section -->
          <div class="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
            <img src="/favicon/favicon-glicks.png" alt="" class="h-12 w-auto rounded-full" />
          </div>

          <!-- Sitemap sections -->
          <div
            class="col-span-6 mt-10 grid gap-8 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Products</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.products" :key="item.name" class="text-base">
                    <RouterLink :to="item.to" class="text-gray-500 hover:text-gray-600 text-sm">{{ item.name }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <!-- Contact us for -->
              <div id="contact-us">
                <h3 class="text-sm font-medium text-gray-900">Contact us from anywhere</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="phonenumber in phonenumbers" :key="phonenumber.name" class="text-sm">
                    <a :href="phonenumber.href" class="text-gray-500 hover:text-amber-400">
                        {{ phonenumber.name }}: {{ phonenumber.number }}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">Customer Service</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li v-for="item in footerNavigation.customerService" :key="item.name" class="text-sm">
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
    { name: 'Shipping', to: '#' },
    { name: 'Secure Payments', to: '#' },
    { name: 'FAQ', to: '#' },
  ],
}
</script>