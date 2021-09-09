<template>
    <div>
        <div>
            <h1>Blog</h1>

            <div class="flex justify-between">
                <w-article
                    class="w-2/5"
                    v-for="(post, index) in posts"
                    :key="'post-'+ index"
                    :title="post.title.rendered"
                    :author="post.author"
                    :categories="post.categories"
                    :description="post.content.rendered"
                    :id="post.id"
                    :tags="post.tags"
                    :permalink="post.slug"
                    :publish-date="post.date"
                    @click="goToArticle"
                />
            </div>
        </div>
    </div>
</template>

<script>
import WArticle from "../../components/wArticle";

export default {
    name: "blog",
    components: {
        WArticle
    },
    layout: 'blog',
    fetch() {
        return this.$axios.get('http://localhost:8000/wp-json/wp/v2/posts').then(res => {
            this.$store.commit('blog/savePosts', res.data)
        })
    },
    computed: {
        posts() {
            return this.$store.state.blog.posts;
        }
    },
    methods: {
        goToArticle(param){
            this.$nuxt.$router.push({
                name: 'blog-post',
                path: `/blog/${param.content}`,
                params: {
                    post: param.permalink,
                    config: param,
                }
            });
        }
    }
}
</script>
