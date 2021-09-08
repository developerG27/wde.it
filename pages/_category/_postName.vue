<template>
    <div>
        POSTNAME:
        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name: "postName",
    data(){
        return{
            title: "",
            content: "",
        }
    },
    fetch() {
        const params = this.$route.params;
        this.title = params.postName;
        this.content = params.category;

        console.log(this.title)

    }
}
</script>

<style scoped>

</style>
