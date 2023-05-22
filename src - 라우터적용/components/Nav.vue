<template>
  <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b[#3a3b3d] dark:text-[#d9d9d9]">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="https://via.placeholder.com/120x50" alt="logo" />
      </router-link>
      <div class="basis-3/4 hidden md:block">
        <ul class="flex justify-around">
          <li class="relative" v-for="(e, index) in NavList[0]" :key="e">
            <router-link :to="NavList[1][index]">{{ e }}</router-link>
          </li>
          <!-- <li><router-link to="/profile">프로필</router-link></li>
        <li><router-link to="/skill">스킬</router-link></li>
        <li><router-link to="/portfolio">포트폴리오</router-link></li> -->
        </ul>
      </div>
      <div class="basis-1/12 hidden md:block">
        <ul class="flex justify-between">
          <li class="basis-2/4 text-center cursor-pointer ">
            <font-awesome-icon :icon=" isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
          </li>
          <li class="basis-2/4 text-center cursor-pointer ml-2 box-border">
            <font-awesome-icon icon="globe" class="text-2xl" />
          </li>
        </ul>
      </div>
      <div>
        <font-awesome-icon icon="bars" class="text-3xl md:hidden cursor-pointer" @click="isOpen === false ? isOpen = true : isOpen = false"/>
      </div>
      <div class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden" :class= "isOpen && '!right-0'">
        <font-awesome-icon icon="times" class="text-3xl md:hidden cursor-pointer absolute top-5 right-5"  @click="isOpen = false"/>
        <div class="text-center mt-6">
          <img src="https://via.placeholder.com/100" alt="img" class="mx-auto rounded-full mb-4">
          <p>프론트엔드 개발자 홍길동</p>
        </div>
        <ul class="mt-12">
          <li class="relative py-5 border-b" v-for="(e, index) in NavList[0]" :key="e">
            <font-awesome-icon :icon="NavList[2][index]" class="mr-2" />
            <router-link :to="NavList[1][index]">{{ e }}</router-link>
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
        ["프로필", "스킬", "포트폴리오"],
        ["/profile", "/skill", "/portfolio"],
        ["user", "code", "folder-open"]
      ],
    };
  },
  props:{
    isDark:Boolean
  },
};
</script>

<style></style>
