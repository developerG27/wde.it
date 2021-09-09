<template>
    <div>
        <h1>{{wp.title}}</h1>
        <p>Pubblicato il: {{wp.publishDate}} da {{wp.author}}</p>
        <p>Tags: {{wp.tags}}</p>
        <p>Categorie: {{wp.categories}}</p>

        <div v-html="wp.description">

        </div>
    </div>
</template>

<script>
export default {
    name: "post",
    computed: {
        wp(){
            let config = this.$route.params.config;
            return {
                title: config.title,
                id: config.id,
                description: config.description,
                categories: config.contegories,
                tags: config.tags,
                author: config.tags,
                publishDate: config.publishDate,
                permalink: config.permalink,
            }
        }
    },
}
</script>
