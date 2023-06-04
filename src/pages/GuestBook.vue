<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8">
    <input type="text" v-model="name" class="border">
    <input type="text" v-model="comment" class="border">
    <button @click="write()">버튼</button>
  </div>
</template>

<script>
import { db } from '@/firebase';
export default {
  data() {
    return {

    }
  },
  methods: {
    write() {
      db.collection('posts').add({
        "name": this.name,
        "comment": this.comment
      })
      this.$router.replace("/cs/notice/list")
    }
  },
}
</script>

<style></style>