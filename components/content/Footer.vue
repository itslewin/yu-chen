<template>
  <div
    v-if="showFooter"
    class="lg:hidden px-2.5 mb-5 flex items-center justify-center flex-col"
  >
    <div class="text-xs text-gray-500 py-1.5">
      © {{ currentYear }} Yu Chen Hsu
    </div>
    <a href="https://www.instagram.com/yuchen_o/" target="_blank">
      <UAvatar
        src="/logos/instagram.svg"
        size="3xs"
        :ui="avatarUI"
        class="py-3 cursor-pointer opacity-50 hover:opacity-100"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear().toString();

const showFooter = computed(() => {
  return window.location.pathname === "/";
});

const avatarUI = {
  size: {
    "3xs": "h-3 w-3",
  },
  rounded: "rounded-sm",
};
</script>
