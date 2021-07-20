<template>
    <div>
        <ul>
            <li v-for="item in pages">
                <a :href="item.link">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "w-pagination",
    props: {
        pages: Array
    },
    data(){
        return {

        }
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style>

</style>
