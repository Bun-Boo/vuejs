<template>
  <div>
    <p>{{ reactTime }}</p>
    <p>{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultScore",
  props: {
    reactTime: Number,
  },
  data() {
    return {
        rank: "",
    };
  },
  mounted() {
    this.checkRank(this.reactTime);
  },
  methods: {
    checkRank(reactTime) {
      if (reactTime < 500) {
        return this.rank = "Excellent";
      } else if (reactTime < 800) {
        return this.rank = "Good";
      } else if (reactTime < 1200) {
        return this.rank = "Normal";
      } else {
        return this.rank = "Bad";
      }
    },
  }
};
</script>

<style scoped>
</style>