<template>
  <div class="hidden lg:block">
    <Swiper
      :modules="[SwiperFreeMode, SwiperMousewheel]"
      :slides-per-view="1"
      :spaceBetween="20"
      :freeMode="true"
      :mousewheel="true"
    >
      <SwiperSlide v-for="slide in 9" :key="slide">
        <NuxtImg :src="`/photos/P${slide}.jpg`" />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="block lg:hidden mb-[20px] last:mb-[40px]" v-for="slide in 9">
    <NuxtImg :src="`/photos/P${slide}.jpg`" />
  </div>
</template>

<script setup lang="ts"></script>
