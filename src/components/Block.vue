<template>
  <div v-if="isShowing">
   <h1>Playing...</h1>
    <h2>Time Delay: {{ timeDelay }}</h2>

    <button @click="stop">Stop</button>
  </div>
</template>

<script>
export default {
  name: "BlockScreen",
  components: {},
  props: {
    timeDelay: Number,
  },
  data() {
    return {
        isShowing: false,
        timer: null,
        react: 0,
    };
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.isShowing = true;
      this.start();
    }, this.timeDelay);
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.react += 10;
      }, 10);
    },
    stop() {
      clearInterval(this.timer);
      this.$emit("stop", this.react);
    },
  },
};
</script>

<style scoped>
</style>