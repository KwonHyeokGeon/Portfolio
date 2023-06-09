<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8">
    <Title title="프로젝트" img="portfolio"></Title>
    <div class="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
      <div v-for="(e, index) in src" :key="e"
        class="relative sm:flex sm:flex-col sm:items-center sm:justify-center md:block shadow-md dark:shadow-white/25">
        <a :href="deploy[index]" target="_blank">
          <img :src="require(`@/assets/thumbnail/${e}.png`)" :alt="e"
            class="rounded-t-lg w-full h-[250px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-white/25 transition-all">
        </a>
        <div
          class="rounded-b-lg w-full px-2 py-10 h-[200px] dark:bg-neutral-700 shadow-md dark:shadow-white/20 transition-all">
          <p class="text-2xl font-bold dark:text-white text-black text-center">{{ data.title[index] }}</p>
          <p class="flex gap-x-4 gap-y-2 flex-wrap dark:text-white text-black my-1"><span v-for="el in data.stack[index]"
              :key="el" class="px-2 rounded-md dark:text-white">{{ el }}</span></p>
          <p class="dark:text-white text-black flex justify-around absolute bottom-4 w-full">
            <a :href="github[index]" target="_blank"
              class="flex border gap-x-2 rounded-lg p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#292929]"><img
                :src="require(`@/assets/images/${gitlink}.svg`)" class="w-6"><span>GitHub</span></a>
            <a href="https://www.notion.so/08946f98ac5143e098ec9ce14675f525?pvs=4" target="_blank" v-if="index === 0"
              class="border rounded-lg p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#292929]"><span>✨ Notion</span></a>
            <a :href="deploy[index]" target="_blank"
              class="flex border gap-x-2 rounded-lg p-2 hover:bg-[#f1f1f1] dark:hover:bg-[#292929]"><img
                :src="require(`@/assets/images/${deplink}.svg`)" class="w-6"><span>Deploy</span></a>
          </p>
        </div>
        <!-- <div v-if="portfolio === index"
          class="absolute top-0 left-0 sm:left-1/2 md:left-0 sm:-translate-x-1/2 md:translate-x-0 flex flex-col justify-center w-full h-full px-3 bg-black/80 dark:bg-white/90 rounded-lg dark:text-neutral-500 text-neutral-400 transition-all"
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
      gitlink: 'GitHub',
      deplink: 'Vercel',
      // modal: false,
      src: ['nongdal', 'portfolio', 'youtube', 'ottugi', 'broadcast', 'parcel', 'calculator', 'quiz', 'apple'],
      deploy: ['https://nongdal.vercel.app/', 'https://portfolio-seven-pi-67.vercel.app/', 'https://youtube-clone-navy-five.vercel.app/', 'https://ottugi-clone.vercel.app/', 'https://broadcast-two.vercel.app/', 'https://parcel-ten-beta.vercel.app/', 'https://calculator-five-pied.vercel.app/', 'https://quiz-one-gilt.vercel.app/', 'https://kwonhyeokgeon.github.io/Apple-clone/'],
      github: ['https://github.com/KwonHyeokGeon/food', 'https://github.com/KwonHyeokGeon/Portfolio', 'https://github.com/KwonHyeokGeon/Youtube-clone', 'https://github.com/KwonHyeokGeon/Ottugi-clone', 'https://github.com/KwonHyeokGeon/broadcast', 'https://github.com/KwonHyeokGeon/parcel', 'https://github.com/KwonHyeokGeon/calculator', 'https://github.com/KwonHyeokGeon/quiz', 'https://github.com/KwonHyeokGeon/Apple-clone']
    }
  },
  components: {
    Title,
  },
  mounted() {
    if (this.isDark) {
      this.gitlink = 'GitHub-dark'
      this.deplink = "Vercel-dark"
    }
  },
  props: {
    isDark: Boolean,
  },
  watch: {
    isDark(oldval) {
      if (oldval === false) {
        this.gitlink = 'GitHub'
        this.deplink = "Vercel"
      }
      else if (oldval === true) {
        this.gitlink = 'GitHub-dark'
        this.deplink = "Vercel-dark"
      }
    }
  },
};
</script>

<style></style>
