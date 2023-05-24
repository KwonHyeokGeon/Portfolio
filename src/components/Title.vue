<template>
  <div class="max-w-4xl mx-auto darkApply">
    <h3 class="relative tracking-widest font-extrabold text-xl flex items-center gap-x-2">
      <img :src="require(`@/assets/images/${img}.png`)" alt="프로필" class="w-7">{{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: String,
    img: String
  },
}
</script>

<style></style>