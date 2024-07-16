<template>
    <main class="h-screen w-screen"> 
        <div class="relative h-full min-w-full flex justify-center items-center">
            <div class="absolute z-10 text-center m-10 bg-gray-950 bg-opacity-30 p-5 rounded-2xl">
                <p class="text-6xl font-semibold text-white">404</p>
                <h1 class="mt-4 text-2xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                <p class="mt-4 text-lg text-white font-semibold sm:mt-6">Sorry, we couldn't find the page you're looking for.</p>
                <div class="mt-10 flex justify-center">
                    <RouterLink to="/" class="flex items-center text-3xl font-bold leading-7 text-white">
                        <ArrowLongLeftIcon class="w-8"/>
                        &emsp14;
                        Back to Home                    </RouterLink>
                </div>
            </div>
            <div class="h-full w-auto min-w-full flex items-center justify-center">
                <img src="@/assets/images/not_found.jpg" class="min-h-full w-auto min-w-full sm:h-auto hero-image object-cover">
            </div>
        </div>
    </main>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import { ArrowLongLeftIcon } from '@heroicons/vue/16/solid';

</script>