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

        <div class="row overflow-auto mx-2">
            <MovieItem :movie="movie" v-for="movie in store.movies">
            </MovieItem>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    max-width: 100vw;
    max-height: 800px;
}
</style>