<template>
  <div class="w-4/5 md:w-1/2 lg:w-1/3 my-10 mx-auto lg:mt-24">
    <h1 class="text-2xl font-bold mb-8">Contact</h1>
    <hr class="mb-8" />
    <div class="text-md leading-loose space-y-6">
      <slot />
    </div>
  </div>
  <div id="contact-form" class="px-4 sm:px-0"></div>
</template>

<script setup lang="ts">
onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://letterbird.co/embed/v1.js";
  script.setAttribute("data-letterbirduser", "yu");
  script.body = true;
  document.getElementById("contact-form").appendChild(script);
});
</script>
