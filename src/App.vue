<template>
  <!-- <NavMenu @dark="DarkMode()"></NavMenu> -->
  <Nav @MenuIndex="SectionMove($event)"  @dark="toggleDark()" :isDark="isDark"></Nav>
  <div ref="section-0">
    <Home></Home>
  </div>
  <div ref="section-1">
    <profile></profile>
  </div>
  <div ref="section-2">
    <portfolio></portfolio>
  </div>
  <Footer></Footer>
</template>

<script>
import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import Portfolio from "./pages/Portfolio.vue";

import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import { useDark, useToggle } from "@vueuse/core";
// json파일을 import해서 data에 변수로 등록해서 활용가능

export default {
  components: {
    Nav,
    Footer,
    Home,
    Profile,
    Portfolio,
  },
  methods: {
    SectionMove(index) {
      this.MenuIndex = index;
      const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
      const offset = rect.top + window.scrollY-60;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
      // scrollTo - 자바스크립트 기본 메소드 이며, 페이지의 특정 위치로 스크롤이 가능
      // window.scrollTo(x좌표, y좌표, 행동)
      // behavior - 스크롤동작을 지정 "auto"기본값 "smooth"부드러운 애니메이션과 함께 스크롤
    },
  },
  data() {
    return {
      isDark: useDark(),
      toggleDark: useToggle(useDark()),
      Fontstyle: "",
      MenuIndex: "section-1",
      ArrayList: "",
    };
  },
  mounted() {
    this.ArrayList = this.$refs;
  },
};
</script>

<style></style>
