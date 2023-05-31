<template>
  <div class="max-w-4xl mx-auto mt-10 pb-8">
    <Title title="프로필" img="profile"></Title>
    <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
      <div class="basis-full mt-8 md:mt-0">
        <div v-for="e in Content" :key="e" class="bg-white rounded-3xl border darkMode p-5 mb-8 last:mb-0">
          <h3 class="text-base md:text-xl font-bold mb-4"> {{ e.title }}</h3>
          <p class="mb-2 last:mb-0 text-sm md:text-base" v-if="e.desc"><span>{{ e.desc }}</span></p>
          <template v-for="el in e.skill" :key="el">
            <p class="mb-2 last:mb-0 text-sm md:text-sm" v-if="e.skill"><span class="flex gap-x-4"><img
                  :src="require(`@/assets/images/${el}-dark.svg`)" :alt="el" class="w-6">{{ el }}</span></p>
          </template>
          <p class="mb-2 last:mb-0 text-sm md:text-base" v-for="(el, index) in e.date" :key="el">{{ el }}:{{
            e.dateDesc[index] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
export default {
  name: "profilePage",
  components: {
    Title
  },
  data() {
    return {
      Content: [
        {
          title: "소개",
          desc: '"안녕하세요 프론트엔드 개발자 권혁건입니다"'
        },
        {
          title: "교육",
          date: [
            "2022.12.29 ~ 2023.06.12",
            "2017.03.01 ~ 휴학"
          ],
          dateDesc: [
            "(디지털컨버전스) 스마트혼합-뷰(vue) 활용 프론트엔드 개발자 양성과정 B",
            "영남대학교 문화인류학과"
          ]
        },
        {
          title: "스킬",
          skill: [
            "Html",
            "Css",
            "Javascript",
            "Vue.js",
            "TailwindCss",
            "Scss",
            "GitHub",
            "Vercel"
          ]
        }
      ],
    }
  },

};
</script>

<style></style>
