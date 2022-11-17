<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,


    }
}
</script>


<template>
    <div class="col">
        <div class="movie my-2">

            <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
            <h5>{{ movie.title }}</h5>
            <h4 class="text-secondary">{{ movie.original_title }}</h4>
            <img class="img-fluid flag rounded-circle" v-if="movie.original_language === 'it'"
                src="../assets/img/ita.png" alt="">
            <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'en'"
                src="../assets/img/eng.webp" alt="">
            <img class="img-fluid flag rounded-circle" v-else-if="movie.original_language === 'fr'"
                src="../assets/img/france.png" alt="">
            <p v-else>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 100px;
    height: 200px;
}

.flag {
    width: 25px;
    height: 25px;
}
</style>