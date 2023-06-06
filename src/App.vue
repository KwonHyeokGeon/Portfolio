<template>
  <div class="overflow-hidden">
    <div class="px-2">
      <!-- <NavMenu @dark="DarkMode()"></NavMenu> -->
      <Nav @MenuIndex="SectionMove($event)" @dark="toggleDark()" :isDark="isDark"></Nav>
      <div ref="section-0">
        <Home></Home>
      </div>
      <div ref="section-1">
        <Profile :isDark="isDark"></Profile>
      </div>
      <div ref="section-2">
        <portfolio :isDark="isDark"></portfolio>
      </div>
      <div ref="section-3">
        <GuestBook :isDark="isDark"></GuestBook>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import Portfolio from "./pages/Portfolio.vue";
import GuestBook from "./pages/GuestBook.vue";

import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import { useDark, useToggle } from "@vueuse/core";
// import {db} from './firebase.js'

export default {
  components: {
    Nav,
    Footer,
    Home,
    Profile,
    Portfolio,
    GuestBook
  },
  methods: {
    SectionMove(index) {
      this.MenuIndex = index;
      const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
      const offset = rect.top + window.scrollY - 60;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      isDark: useDark(),
      toggleDark: useToggle(useDark()),
      MenuIndex: "section-1",
      ArrayList: "",
    };
  },
  mounted() {
    this.ArrayList = this.$refs;
    // let currentDateTime = new Date();
    // let currentHour = currentDateTime.getHours();
    // (currentHour >= 18 ? this.isDark = true : this.isDark = false)
  },
};
</script>

<style></style>
