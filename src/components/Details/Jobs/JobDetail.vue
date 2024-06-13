<template>
    <div>
        <h1>Job Detail {{ id }}</h1>
    </div>
</template>

<script>
    export default {
        name: "JobDetail",
        components: {},
        // props: { id : Number || String},
        data() {
            return {
                id : this.$route.params.id
            };
        },
        methods: {},
        mounted() {
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>