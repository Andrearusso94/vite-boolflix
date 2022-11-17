<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,


    },


}
</script>


<template>
    <div class="col">
        <div class="movie my-2">

            <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
            <h5 class="text-white">{{ movie.title }}</h5>
            <h4 class="text-white">{{ movie.original_title }}</h4>
            <img class="img-fluid flag rounded-circle" v-if="movie.original_language === 'it'"
                src="../assets/img/ita.png" alt="">
            <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'en'"
                src="../assets/img/eng.webp" alt="">
            <img class="img-fluid flag rounded-circle" v-else-if="movie.original_language === 'fr'"
                src="../assets/img/france.png" alt="">
            <p classe="text-white" v-else>{{ movie.original_language }}</p>
            <p class="stars">
                <font-awesome-icon icon="fa-solid fa-star" v-for="index in 5"
                    :class="Math.floor(movie.vote_average / 2) > index" />
            </p>



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

.fa-star {
    color: gold;
}
</style>