<template>
    <div>
        <p>Id: {{id}}</p>
        <p>Titolo: {{title}}</p>
        <p>Descrizione: {{description}}</p>
        <p>Categorie: {{categories}}</p>
        <p>Tag: {{tags}}</p>
        <p>Autore: {{author}}</p>
        <p>Data di pubblicazione {{publishDate}}</p>
        <p>Link {{permalink}}</p>
    </div>
</template>

<script>
export default {
    name: "w-article",
    props: {
        id: Number,
        title: String,
        description: String,
        categories: String,
        tags: String,
        author: String,
        publishDate: String,
        permalink: String,
    },
    data(){
        return {

        }
    },
    computed: {

    },
    methods: {

    },
}
</script>

<style>
</style>
