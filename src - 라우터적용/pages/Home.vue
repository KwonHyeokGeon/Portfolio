<template>
  <div class="w-full">
    <div class="max-w-7xl mx-auto pt-40 pb-24">
      <div class="flex-wrap flex items-center">
        <div class="basis-full md:basis-2/4 text-center py-3">
          <p class="text-green-600 hover:text-green-400 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:text-[#d9d9d9]">
            안녕하세요
            <br/>
            프론트엔드 개발자
            <br/>
            권혁건 입니다.
          </p>
        </div>
        <div class="basis-full md:basis-2/4 text-center">
          <div class="m-3 p-1 lg:p-5">
            <lottie-player :src="require('@/assets/ani.json')"
            background="transparent" speed="1" style="max-width: 500px; max-height: 500px;" autoplay loop></lottie-player>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@lottiefiles/lottie-player"
export default {
  name:"HomePage"
}
</script>

<style>

</style>