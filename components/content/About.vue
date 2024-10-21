<template>
  <div class="w-4/5 md:w-1/2 lg:w-1/3 my-10 mx-auto lg:mt-24">
    <h1 class="text-2xl font-bold mb-8">About</h1>
    <hr class="mb-8" />
    <div class="text-md leading-loose space-y-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Yu Chen Hsu – About",
});
</script>
