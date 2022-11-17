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
    <div class="container-fluid py-5">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 mx-2">
            <MovieItem :movie="movie" v-for="movie in store.movies">
            </MovieItem>
        </div>
    </div>
</template>