<template>
  <div class="max-w-4xl mx-auto pt-12 mt-16 pb-8 ">
    <Title title="방명록" img="guestbook"></Title>
    <div class="w-full bg-white rounded-xl border darkMode p-2 shadow-lg mt-10">
      <div>
        <p v-for="e in posts" :key="e" class="flex gap-x-10 justify-between border-b px-4">
          <span class="w-6/12">{{ e.comment }}</span><span class="w-4/12">{{ e.name }}<span class="px-4 inline-block">|</span>{{e.date}}</span>
        </p>
      </div>
      <div class="mt-10 flex justify-evenly darkMode">
        <input type="text" v-model="comment" placeholder="코멘트" class="border rounded-full px-4 w-8/12 darkApply">
        <input type="text" v-model="name" placeholder="이름" class="border rounded-full px-4 w-3/12 darkApply"
          @keyup.enter="write()">
        <button @click="write()"><img :src="require(`@/assets/images/${darkUpdate}.svg`)" alt="전송" class="w-6"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '@/firebase';
import Title from "../components/Title.vue";

export default {
  data() {
    return {
      posts: '',
      name: '',
      comment: '',
      send: 'send',
      date: new Date()
    }
  },
  components: {
    Title,
  },
  methods: {
    write() {
      database.ref('posts/' + this.name).update({
        name: this.name,
        comment: this.comment,
        date: this.date.toLocaleString('ko-KR')
      });
      this.name = ''
      this.comment = ''
    },

  },
  created() {
    const databaseRef = database.ref('posts').limitToFirst(10);
    databaseRef.on("value", (snapshot) => {
      this.posts=snapshot.val();
    });
  },
  props: {
    isDark: Boolean,
  },
  computed: {
    darkUpdate() {
      if (this.isDark === true) {
        return 'send-dark';
      } else {
        return 'send';
      }
    }
  },
}
</script>

<style></style>