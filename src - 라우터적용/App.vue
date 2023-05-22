<template>
  <!-- <NavMenu @dark="DarkMode()"></NavMenu> -->
  <FontBox></FontBox>
  <Nav @dark="toggleDark()" :isDark="isDark"></Nav>
  <router-view />
  <Footer></Footer>
</template>

<script>
import FontBox from "./components/Fontbox.vue"
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
import { useDark, useToggle } from "@vueuse/core";

export default {
  components: {
    Nav,
    Footer,
    FontBox
  },
  methods: {
    DarkMode() {
      // document.querySelector("html").classList.toggle("dark");
    },
  },
  data() {
    return {
      isDark: useDark(),
      toggleDark: useToggle(useDark()),
      Fontstyle:""
    };
  },
  mounted() {
    this.Fontstyle = localStorage.getItem('font')
    document.querySelector('body').classList.add(this.Fontstyle)
  },
};
</script>

<style>
</style>
