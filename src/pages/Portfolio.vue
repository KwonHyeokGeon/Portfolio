<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8">
    <Title title="프로젝트" img="portfolio"></Title>
    <div class="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(e, index) in src" :key="e" class="relative sm:flex sm:justify-center md:block">
        <img :src="require(`@/assets/thumbnail/${e}.png`)" :alt="e"
          class="rounded-lg w-full sm:w-3/4 md:w-full h-[225px] shadow-2xl dark:shadow-zinc-500 transition-all"
          @mouseenter="modalOn(index); modal = true">
        <div v-if="portfolio === index"
          class="absolute top-0 left-0 sm:left-1/2 md:left-0 sm:-translate-x-1/2 md:translate-x-0 sm:w-3/4 md:w-full flex flex-col justify-center w-full h-full px-3 bg-black/80 dark:bg-white/90 rounded-lg dark:text-neutral-500 text-neutral-400 transition-all"
          :class="!modal ? 'hidden' : 'block'" @mouseleave="modal = false">
          <p class="hover:text-white dark:hover:text-black">GitHub : <a :href="github[index]" target="_blank">{{ github[index] }}</a></p>
          <p class="hover:text-white dark:hover:text-black">Link : <a :href="deploy[index]" target="_blank">{{ deploy[index] }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  name: "portfolioPage",
  methods: {
    modalOn(index) {
      this.portfolio = index
    }
  },
  data() {
    return {
      portfolio: null,
      modal: false,
      src: ['broadcast', 'calculator', 'parcel', 'quiz', 'ottugi', 'youtube'],
      deploy: ['https://broadcast-two.vercel.app/', 'https://calculator-five-pied.vercel.app/', 'https://parcel-ten-beta.vercel.app/', 'https://quiz-one-gilt.vercel.app/', 'https://ottugi-clone.vercel.app/', 'https://youtube-clone-navy-five.vercel.app/'],
      github: ['https://github.com/KwonHyeokGeon/broadcast', 'https://github.com/KwonHyeokGeon/calculator', 'https://github.com/KwonHyeokGeon/parcel', 'https://github.com/KwonHyeokGeon/quiz', 'https://github.com/KwonHyeokGeon/Ottugi-clone', 'https://github.com/KwonHyeokGeon/Youtube-clone']
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
