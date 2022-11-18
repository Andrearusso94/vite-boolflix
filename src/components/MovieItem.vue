<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,


    },


}
</script>


<template>



    <li class="card_movie position-relative mx-2">

        <h6 class="text-white"> Titolo:<span class="text-secondary"> {{ movie.title || movie.name }}</span>
        </h6>
        <h6 class="text-white"> Titolo Originale:<span class="text-secondary"> {{ movie.original_title ||
                movie.original_name
        }}</span></h6>
        <img class="img-fluid flag rounded-circle" v-if="movie.original_language === 'it'" src="../assets/img/ita.png"
            alt="">
        <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'en'"
            src="../assets/img/eng.webp" alt="">
        <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'es'"
            src="../assets/img/spa.png" alt="">
        <img class="img-fluid flag rounded-circle" v-else-if="movie.original_language === 'fr'"
            src="../assets/img/france.png" alt="">
        <p classe="text-white" v-else>Lingua Originale: <span class="text-secondary">{{
                movie.original_language
        }}</span> </p>

        <div class="vote">
            <font-awesome-icon icon="fa-solid fa-star" v-for="index in 5"
                :class="Math.ceil(movie.vote_average / 2) > index ? 'gold' : 'grey'" />
        </div>

        <p calss="overview"> Overview:
            <span class="text-secondary">{{ movie.overview }}</span>
        </p>


        <div class="image">
            <img class="img-fluid" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
        </div>
    </li>






</template>

<style lang="scss" scoped>
.card_movie {
    height: 500px;
    width: 300px;
    background-color: black;
    color: white;
    margin-bottom: 2rem;
    overflow: hidden;
    flex-shrink: 0;

}

img {
    max-width: 100%;
    height: 500px;

}


.image {
    position: absolute;
    top: 0;
    height: 500px;
    width: 300px;
    background-color: black;
    color: white;

    &:hover {
        opacity: 0;
    }
}


.flag {
    width: 25px;
    height: 25px;
}

.gold {
    color: gold;
}

.grey {
    color: rgba(128, 128, 128, 0.831)
}
</style>