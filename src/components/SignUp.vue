<template>
  <div>
   <form @submit="handleSubmit">
         <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password">

        <p>{{ email }}</p>
        <p>{{ password }}</p>

        <button>Sign Up</button>
   </form>
  </div>

</template>

<script>
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log(this.email, this.password);
    },
  },
};
</script>

<style scoped>
</style>