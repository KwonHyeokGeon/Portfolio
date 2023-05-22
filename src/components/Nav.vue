<template>
  <div
    class="w-72 h-screen fixed top-0 sm:left-0 bg-white z-50 dark:bg-gray-600 dark:text-white flex justify-center items-center overflow-hidden transition-all"
    :class="isOpen === true ? 'left-0' : '-left-96'">
    <img :src="require(`@/assets/images/delete.png`)" alt="닫기" class="w-6 absolute top-5 right-5 cursor-pointer sm:hidden" @click="isOpen === false">
    <div class="flex flex-col justify-between gap-6">
      <button @click="$emit('MenuIndex', 'section-0')" class="flex">
        홈
      </button>
      <div class="block">
        <ul class="flex flex-col gap-6">
          <li class="relative" v-for="(e, index) in NavList[0]" :key="e">
            <button @click="$emit('MenuIndex', 'section-' + (index + 1))">{{ NavList[0][index] }}</button>
          </li>
        </ul>
      </div>
      <div class="block">
        <ul>
          <li class="text-center cursor-pointer">
            <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl flex" @click="$emit('dark')" />
          </li>
        </ul>
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
        ["프로필", "포트폴리오"],
        ["/profile", "/portfolio"],
        ["user", "code", "folder-open"]
      ],
    };
  },
  props: {
    isDark: Boolean,
  },
  methods: {
  },
};
</script>

<style></style>
