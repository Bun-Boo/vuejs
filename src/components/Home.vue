<template>
  <div v-for="job in jobs" :key="job.id" class="box">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
      <div>
        <h2>{{ job.title }}</h2>
        <p>{{ job.company }}</p>
        <p>{{ job.location }}</p>
        <p>{{ job.type }}</p>
        <p>{{ job.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  components: {},
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Google",
          location: "Mountain View, CA",
          type: "Full Time",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc",
        },
        {
          id: 2,
          title: "Backend Developer",
          company: "Facebook",
          location: "Menlo Park, CA",
          type: "Part Time",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc",
        },
        {
          id: 3,
          title: "Fullstack Developer",
          company: "Amazon",
          location: "Seattle, WA",
          type: "Full Time",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.box {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>