<template>
  <div class="grid grid-cols-2 lg:hidden my-4">
    <NuxtLink to="/" class="ml-4 mt-1"> Yu Chen Hsu </NuxtLink>
    <UDropdown
      :items="items"
      :popper="{ placement: 'bottom-start' }"
      class="mr-4 justify-self-end"
    >
      <UButton color="white" trailing-icon="i-heroicons-bars-3-20-solid" />
    </UDropdown>
  </div>

  <div class="lg:grid lg:grid-cols-6 gap-6">
    <div class="hidden lg:inline-block mt-12 ml-4">
      <UVerticalNavigation :links="links" :ui="ui" />
      <div class="px-2.5">
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
    </div>
    <div class="lg:col-span-5">
      <slot />
    </div>
  </div>

  <ClientOnly>
    <div class="flex items-center justify-center">
      <Footer />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const ui = {
  size: "text-lg",
};

const currentYear = new Date().getFullYear().toString();

const links = [
  {
    label: "Yu Chen Hsu",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const avatarUI = {
  size: {
    "3xs": "h-3 w-3",
  },
  rounded: "rounded-sm",
};

const items: any = [];
for (let link in links) {
  items.push([links[link]]);
}
</script>
