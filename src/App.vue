<template>
 <button @click="random" :disabled="isPlaying">Random</button>
  <BlockScreen v-if="isPlaying" :timeDelay="timeDelay" @stop="end"/>
  <ResultScore v-if="isShowResult" :reactTime="reactTime"/>
  <SignUp />
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view/>
</template>

<script>
import BlockScreen from "./components/Block.vue";
import ResultScore from './components/Result.vue';
import SignUp from './components/SignUp.vue';

export default {
  data() {
    return {
      isPlaying: false,
      timeDelay: null,
      reactTime: null,
      isShowResult: false,
    };
  },
  methods: {
    random() {
      this.isShowResult = false;
      this.isPlaying = true;
      this.timeDelay = 2000 + Math.random() * 3000;
      console.log(this.timeDelay);
    },
    end(e) {
      this.reactTime = e;
      this.isPlaying = false;
      this.timeDelay = null;
      this.isShowResult = true;
    },
  },
  name: "App",
  components: {
    BlockScreen,
    ResultScore,
    SignUp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
