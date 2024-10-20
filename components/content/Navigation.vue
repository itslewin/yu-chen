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
    </div>
    <div class="lg:col-span-5">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const ui = {
  size: "text-lg",
};

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
  {
    label: "© " + new Date().getFullYear().toString() + " Yu Chen Hsu",
    labelClass: "pointer-events-none text-xs",
  },
  {
    label: "",
    avatar: {
      size: "3xs",
      src: "/logos/instagram.svg",
      ui: {
        size: {
          "3xs": "h-3 w-3",
        },
        rounded: "rounded-sm",
      },
      class: "dark:filter dark:invert",
      imgClass: "opacity-50 group-hover:opacity-100",
    },
    to: "https://www.instagram.com/yuchen_o/",
    target: "_blank",
    labelClass:
      "opacity-80 hover:opacity-100 text-xs hover:before:bg-transparent dark:hover:before:bg-transparent",
  },
];

const items = [];
for (let link in links) {
  items.push([links[link]]);
}
</script>
