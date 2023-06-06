<template>
  <div>
    <div
      class="w-60 h-screen fixed top-0 bg-white z-50 dark:bg-gray-600 dark:text-white flex justify-center items-center overflow-hidden transition-all"
      :class="isOpen === true ? 'left-0' : '-left-96'">
      <img :src="require(`@/assets/images/delete.png`)" alt="닫기"
        class="w-10 top-2 left-0 cursor-pointer rounded-full p-2 " :class="isOpen === true ? 'fixed' : 'hidden'"
        @click="isOpen = false">
      <img :src="require(`@/assets/images/menu.png`)" alt="열기"
        class="w-10 top-16 left-5 cursor-pointer rounded-full p-1 dark:bg-white/40 bg-gray-500/60"
        :class="isOpen === false ? 'fixed' : 'hidden'" @click="isOpen = true">
      <img :src="require(`@/assets/images/${logo}.png`)" alt="로고"
        class="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40">
      <div class="flex flex-col justify-between gap-6">
        <button @click="$emit('MenuIndex', 'section-0')"
          class="outline-none hover:bg-[#f1f1f1] dark:hover:bg-[#292929] rounded-md p-1">
          홈
        </button>
        <div class="block">
          <ul class="flex flex-col gap-6 items-center">
            <li class="relative w-full" v-for="(e, index) in NavList[0]" :key="e">
              <button @click="$emit('MenuIndex', 'section-' + (index + 1))"
                class="outline-none hover:bg-[#f1f1f1] dark:hover:bg-[#292929] p-1 rounded-md w-full">{{ NavList[0][index]
                }}</button>
            </li>
          </ul>
        </div>
        <div class="block">
          <ul>
            <li class="flex justify-center items-center cursor-pointer w-full">
              <font-awesome-icon :icon="isDark ? 'sun' : 'moon'"
                class="text-2xl hover:bg-[#f1f1f1] dark:hover:bg-[#292929] p-1 rounded-md w-full"
                @click="$emit('dark')" />
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div
      class="w-60 h-screen fixed top-0 left-0 bg-white z-50 dark:bg-gray-600 dark:text-white hidden justify-center items-center overflow-hidden transition-all 2xl:flex">
      <div class="flex flex-col justify-between gap-6">
        <img :src="require(`@/assets/images/${darkUpdate}.png`)" alt="로고"
          class="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40">
        <button @click="$emit('MenuIndex', 'section-0')"
          class="outline-none hover:bg-[#f1f1f1] dark:hover:bg-[#292929] rounded-md p-1">
          홈
        </button>
        <div class="block">
          <ul class="flex flex-col gap-6 items-center">
            <li class="relative" v-for="(e, index) in NavList[0]" :key="e">
              <button @click="$emit('MenuIndex', 'section-' + (index + 1))"
                class="outline-none hover:bg-[#f1f1f1] dark:hover:bg-[#292929] p-1 rounded-md">{{ NavList[0][index]
                }}</button>
            </li>
          </ul>
        </div>
        <div class="block">
          <ul>
            <li class="text-center cursor-pointer">
              <font-awesome-icon :icon="isDark ? 'sun' : 'moon'"
                class="text-2xl hover:bg-[#f1f1f1] dark:hover:bg-[#292929] p-1 rounded-md" @click="$emit('dark')" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  data() {
    return {
      isOpen: false,
      NavList: [
        ["프로필", "포트폴리오", "방명록"],
        ["user", "code", "folder-open"]
      ],
      logo: 'logo'
    };
  },
  props: {
    isDark: Boolean,
  },
  computed: {
    darkUpdate() {
      if (this.isDark === true) {
        return 'logo-dark';
      } else {
        return 'logo';
      }
    }
  }
};
</script>

<style></style>
