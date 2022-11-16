<script>
import MovieList from './MovieList.vue';
import { store } from './store.js'


export default {
    name: "AppMain",
    components: { MovieList },
    data() {
        return {
            store
        }
    }

}
</script>

<template>

    <MovieList :movies="store.movies" />
</template>