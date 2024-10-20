<template>
  <div class="hidden lg:block">
    <Swiper
      :modules="[SwiperFreeMode, SwiperMousewheel]"
      :slides-per-view="1"
      :freeMode="true"
      :mousewheel="true"
    >
      <SwiperSlide v-for="slide in 9" :key="slide">
        <NuxtImg :src="`/photos/P${slide}.jpg`" class="w-10/12 mt-3" />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="block lg:hidden mb-10" v-for="slide in 9">
    <!-- <Swiper
      :modules="[SwiperFreeMode, SwiperMousewheel]"
      :slides-per-view="2"
      :freeMode="true"
      :mousewheel="true"
      :direction="'vertical'"
      class="h-screen"
    >
      <SwiperSlide v-for="slide in 9" :key="slide">
        <NuxtImg :src="`/photos/P${slide}.jpg`" class="w-10/12 mx-auto" />
      </SwiperSlide>
    </Swiper> -->
    <NuxtImg :src="`/photos/P${slide}.jpg`" class="w-10/12 mx-auto mb-10" />
  </div>
</template>

<script setup lang="ts"></script>
