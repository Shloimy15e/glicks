<template>
  <div class="container bg-polka-dots min-w-full">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath"></component>
      </transition>
    </router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="css">
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>