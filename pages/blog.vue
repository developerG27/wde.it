<template>
    <div class="page-blog d-flex">
        <div>
            <h1>Blog</h1>

            <w-article
                v-for="(post, index) in posts"
                :key="'post-'+ index"
                :title="post.title.rendered"
                :author="post.author"
                :categories="post.categories"
                :description="post.content.rendered"
                :id="post.id"
                :tags="post.tags"
                :permalink="post.permalink"
                :publish-date="post.date"
            />
        </div>


        <button @click="toPost">Vai a </button>
    </div>
</template>

<script>
import WArticle from "../components/wArticle";

export default {
    name: "blog.vue",
    components: {WArticle},
    layout: 'blog',
    methods: {
        toPost(){
            this.$router.push({
                params: {
                    path: '/nome-categoria/nome-posts',
                    title: 'sono il titolo'
                },
                path: '/nome-categoria/nome-posts'
            });
        }
    },
    fetch() {
        return this.$axios.get('http://localhost:8000/wp-json/wp/v2/posts').then(res => {
            this.$store.commit('blog/savePosts', res.data)
        })
    },
    computed: {
        posts(){
            return this.$store.state.blog.posts;
        }
    }
}
</script>

<style lang="scss">
.d-flex{
    display: flex;
}
</style>
