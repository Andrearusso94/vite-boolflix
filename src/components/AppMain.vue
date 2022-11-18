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
    <main>

        <MovieList :movies="store.movies" />

    </main>
</template>