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
    <div class="container_mine my-5">
        <ul class="">
            <MovieItem :movie="movie" v-for="movie in store.movies">
            </MovieItem>
        </ul>
    </div>

    <!--  <div class="row mx-2">
            
        </div>-->

</template>
<style lang="scss" scoped>
.container_mine {

    overflow-y: scroll;
}
</style>