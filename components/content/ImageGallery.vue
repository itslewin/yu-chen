<template>
  <div class="hidden lg:block">
    <Swiper
      :modules="[SwiperFreeMode, SwiperMousewheel]"
      :slides-per-view="1"
      :freeMode="true"
      :mousewheel="true"
    >
      <SwiperSlide v-for="slide in 9" :key="slide">
        <NuxtImg :src="`/photos/P${slide}.jpg`" class="w-11/12 py-6 px-5" />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="block lg:hidden">
    <Swiper
      :modules="[SwiperFreeMode, SwiperMousewheel]"
      :slides-per-view="2"
      :freeMode="true"
      :mousewheel="true"
      :direction="'vertical'"
      class="h-screen"
    >
      <SwiperSlide v-for="slide in 9" :key="slide">
        <NuxtImg :src="`/photos/P${slide}.jpg`" class="w-11/12 mx-auto" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts"></script>
