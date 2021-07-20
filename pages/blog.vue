<template>
    <div>
        <h1>Blog</h1>

        <div>
            <h3></h3>
        </div>

        {{posts}}
    </div>
</template>

<script>
import {getAllPost} from "../services/blogServices";
import api from "../enums/api";

export default {
    name: "blog.vue",
    layout: 'blog',
    data() {
        return {
            posts: "",
        }
    },
    methods: {
         async getArticles() {
            this.posts =  await this.$axios.$get("http://localhost:8000/" + api.getAllPosts)
        }
    },
    created() {
        this.getArticles();
    },
    mounted() {
        console.log("mounted");
    }
}
</script>

<style>
</style>
