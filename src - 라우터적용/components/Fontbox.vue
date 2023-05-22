<template>
  <div class="fixed left-0 top-2/4 -translate-y-2/4 z-50">
    <div class="bg-white darkMode p-1 text-center absolute cursor-pointer transition-all duration-500 left-0" :class="isOpen && 'left-36'">
      <font-awesome-icon icon="pencil" class="text-2xl p-2 box-border" @click="isOpen === false ? isOpen = true : isOpen = false" ></font-awesome-icon>
    </div>
    <ul class="absolute w-36 -left-36 bg-white darkMode duration-500 transition-all" :class="isOpen&&'!left-0'" @click="isOpen === false ? isOpen = true : isOpen = false">
      <li v-for="(e,index) in FontList" :key="e" class="cursor-pointer text-center py-2" :class="e.font" @click="FontSelect(index)" @mouseover="FontView(index)" @mouseout="FontRemove(index)">{{ e.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FontBox",
  data() {
    return {
      isOpen: true,
      FontList:[
        {
          title:"더잠실체",
          font:"TheJansil",
        },
        {
          title:"부크크명조체",
          font:"BookMyungjo"
        },
        {
          title:"여기어때잘난체",
          font:"jalnan"
        },
        {
          title:"프리텐다드체",
          font:"Pretendard"
        }
      ]
    }
  },
  methods: {
    FontSelect(index){
      console.log(index)
      document.querySelector('body').classList = []
      document.querySelector('body').classList.add(this.FontList[index].font)
      localStorage.setItem('font', this.FontList[index].font)
    },
    FontView(index){
      document.querySelector('body').style.fontFamily = this.FontList[index].font
    },
    FontRemove(index){
      document.querySelector('body').style = [];
      console.log(index)
    }
  },
};
</script>

<style></style>
