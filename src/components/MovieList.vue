<script>
import MovieItem from './MovieItem.vue';
import { store } from './store.js'
export default {
    name: 'MovieList',
    components: {
        MovieItem,
    },
    data() {
        return {
            store
        }
    }

}
</script>
<template>
    <div class="container py-5">

        <div class="row row-cols-1 row-cols-sm-4 mx-2">
            <MovieItem :movie="movie" v-for="movie in store.movies">
            </MovieItem>
        </div>
    </div>
</template>