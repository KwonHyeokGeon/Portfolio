<template>
  <div class="w-full pt-12 mt-16 px-[2%] pb-8">
    <Title title="스킬"></Title>
    <div class="max-w-7xl mx-auto mt-8">
      <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
        <div class="w-full h-20" v-for="e in ProgressList" :key="e">
          <div class="w-full h-5 bg-[#e0e0de] rounded-[50px]">
            <div class="h-full bg-slate-700 duration-1000 ease-in-out rounded-[50px] text-right
            relative mb-3 first:mt-10" :style="{width: `${e.progressBefore}%`}">
              <p class="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{{ e.textList }}</p>
              <span class="text-sm pr-2 relative -top-0.5">{{ e.progressBefore }}</span>
            </div>
            <p class="text-sm md:text-base">{{ e.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Title.vue"
export default {
  name: "skillPage",
  components:{
    Title
  },
  data() {
    return {
      ProgressList:[
        {
          textList:"html",
          progressBefore:0,
          progressAfter:30,
          desc:"웹표준에 준수하여, 마크업을 할 수 있다."
          // 배열은 애니메이션이 적용되지 않음. 객체는 가능
        },
        {
          textList:"css",
          progressBefore:0,
          progressAfter:40,
          desc:"웹표준에 준수하여, 마크업을 할 수 있다."
          // 배열은 애니메이션이 적용되지 않음. 객체는 가능
        },
        {
          textList:"js",
          progressBefore:0,
          progressAfter:50,
          desc:"웹표준에 준수하여, 마크업을 할 수 있다."
          // 배열은 애니메이션이 적용되지 않음. 객체는 가능
        },
        {
          textList:"jqery",
          progressBefore:0,
          progressAfter:30,
          desc:"웹표준에 준수하여, 마크업을 할 수 있다."
          // 배열은 애니메이션이 적용되지 않음. 객체는 가능
        },
        {
          textList:"vue",
          progressBefore:0,
          progressAfter:30,
          desc:"웹표준에 준수하여, 마크업을 할 수 있다."
          // 배열은 애니메이션이 적용되지 않음. 객체는 가능
        }
      ]
    }
  },
  mounted() {
    this.ProgressList.forEach((e)=>{
      setTimeout(()=>{
        e.progressBefore = e.progressAfter
      },300)
    })
  },
};
</script>

<style></style>
