<template>
  <div class="mt-40">
    <div class="max-w-4xl mx-auto pb-24 dark:text-white relative">
      <p class="flex items-center text-4xl font-bold">권혁건<span class="mx-5">Kwon Hyeokgeon</span></p>
      <p class="mt-8 ml-4">✉️ email : weekend12@icloud.com</p>
      <p class="ml-4">📱 phone : 010-8338-6134</p>
      <p class="ml-4">💻 github : <a href="https://github.com/KwonHyeokGeon" target="_blank">https://github.com/KwonHyeokGeon</a></p>
      <img :src="require(`@/assets/images/face.png`)" alt="이모티콘" class="w-32 absolute -top-40 md:top-5 md:right-10 right-1/2 translate-x-1/2">
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    langList: Object
  },
  mounted() {

  },
}
</script>

<style></style>