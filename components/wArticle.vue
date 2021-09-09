<template>
    <div class="border-2">
        <p>Id: {{id}}</p>
        <p>Titolo: {{title}}</p>
        <p>Descrizione: {{description}}</p>
        <p>Categorie: {{categories}}</p>
        <p>Tag: {{tags}}</p>
        <p>Autore: {{author}}</p>
        <p>Data di pubblicazione {{publishDate}}</p>

        <br />

        <button @click="click">Vai all'articolo</button>
    </div>
</template>
<script>

export default {
    name: "w-article",
    props: {
        id: Number,
        title: String,
        description: String,
        categories: [String, Array],
        tags: [String, Array],
        author: [String, Number],
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
        click(){
            this.$emit('click', this.$props);
        }
    }
}
</script>
