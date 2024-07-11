<template>
    <div class="relative w-full h-80 sm:h-96 bg-amber-950 flex justify-center items-center">
        <div class="absolute z-10 text-center mt-10">
            <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
                A Taste You Recognize
            </h1>
            <h2 class="flex flex-col text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-12 items-center">
                With a Kashrus You Trust
                <img src="/images/hechsher.png" class="w-36 h-auto px-2 pb-1 mt-6 bg-white rounded-3xl" />
            </h2>
        </div>
        <div class="h-full w-full hero-image-container overflow-clip flex items-center justify-center">
            <img :src="mainImage" class="min-w-full min-h-[150%] w-auto sm:h-auto opacity-60 hero-image object-cover">
        </div>
    </div>
</template>

<script setup>
import mainImage from '@/assets/images/main_image.png';
</script>