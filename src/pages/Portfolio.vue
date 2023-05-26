<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8">
    <Title title="포트폴리오" img="portfolio"></Title>
    <div class="w-full mt-10 grid grid-cols-2 gap-5">
      <div v-for="e in src" :key="e">
        <img :src="require(`@/assets/thumbnail/${e}.png`)" :alt="e"
          class="rounded-lg w-[430px] h-[225px] shadow-2xl dark:shadow-zinc-500 hover:scale-105 transition-all">
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  name: "portfolioPage",
  methods: {},
  data() {
    return {
      src: ['broadcast', 'calculator', 'parcel', 'quiz', 'ottugi', 'youtube'],
      href: ['https://broadcast-two.vercel.app/', 'https://calculator-five-pied.vercel.app/', 'https://parcel-ten-beta.vercel.app/', 'https://quiz-one-gilt.vercel.app/', 'https://ottugi-clone.vercel.app/', 'https://youtube-clone-navy-five.vercel.app/']
    }
  },
  components: {
    Title,
  },
  computed: {
  },
};
</script>

<style>
</style>
