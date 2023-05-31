<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8">
    <Title title="프로젝트" img="portfolio"></Title>
    <div class="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(e, index) in src" :key="e"
        class="relative sm:flex sm:flex-col sm:items-center sm:justify-center md:block">
        <img :src="require(`@/assets/thumbnail/${e}.png`)" :alt="e"
          class="rounded-t-lg w-full sm:w-3/4 md:w-full h-[250px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-white/25 transition-all">
        <div class="rounded-b-lg w-full px-2 py-10 sm:w-3/4 md:w-full h-[200px] shadow-md dark:shadow-white/20 transition-all">
          <p class="text-2xl font-bold">{{ data.title[index] }}</p>
          <p class="flex gap-x-4"><span v-for="el in data.stack[index]" :key="el">{{ el }}</span></p>
          <p>요약설명</p>
          <p class="dark:text-white flex justify-between"><a :href="github[index]" target="_blank">GitHub</a><a :href="deploy[index]" target="_blank">Link</a></p>
        </div>
        <!-- <div v-if="portfolio === index"
          class="absolute top-0 left-0 sm:left-1/2 md:left-0 sm:-translate-x-1/2 md:translate-x-0 sm:w-3/4 md:w-full flex flex-col justify-center w-full h-full px-3 bg-black/80 dark:bg-white/90 rounded-lg dark:text-neutral-500 text-neutral-400 transition-all"
          :class="!modal ? 'hidden' : 'block'" @mouseleave="modal = false">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/portfolio.json'
import Title from "../components/Title.vue";
export default {
  name: "portfolioPage",
  methods: {
    // modalOn(index) {
    //   this.portfolio = index
    // }
  },
  data() {
    return {
      data: data,
      portfolio: null,
      // modal: false,
      src: ['nongdal', 'youtube', 'ottugi', 'broadcast', 'parcel', 'calculator', 'quiz', 'apple'],
      deploy: ['https://food-two-pi.vercel.app/', 'https://youtube-clone-navy-five.vercel.app/', 'https://ottugi-clone.vercel.app/', 'https://broadcast-two.vercel.app/', 'https://parcel-ten-beta.vercel.app/', 'https://calculator-five-pied.vercel.app/', 'https://quiz-one-gilt.vercel.app/', 'https://kwonhyeokgeon.github.io/Apple-clone/'],
      github: ['https://github.com/KwonHyeokGeon/food', 'https://github.com/KwonHyeokGeon/Youtube-clone', 'https://github.com/KwonHyeokGeon/Ottugi-clone', 'https://github.com/KwonHyeokGeon/broadcast', 'https://github.com/KwonHyeokGeon/parcel', 'https://github.com/KwonHyeokGeon/calculator', 'https://github.com/KwonHyeokGeon/quiz', 'https://github.com/KwonHyeokGeon/Apple-clone']
    }
  },
  components: {
    Title,
  },
  computed: {
  },
};
</script>

<style></style>
