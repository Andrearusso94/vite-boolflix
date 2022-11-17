<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object,


    },


}
</script>


<template>
    <div class="col position-relative">
        <div class="card_movie">
            <div class="movie my-2">


                <h5 class="text-white"> Titolo: {{ movie.title || movie.name }}</h5>
                <h4 class="text-white"> Titolo Originale: {{ movie.original_title || movie.original_name }}</h4>
                <img class="img-fluid flag rounded-circle" v-if="movie.original_language === 'it'"
                    src="../assets/img/ita.png" alt="">
                <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'en'"
                    src="../assets/img/eng.webp" alt="">
                <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'es'"
                    src="../assets/img/spa.png" alt="">
                <img class="img-fluid flag rounded-circle" v-else-if="movie.original_language === 'fr'"
                    src="../assets/img/france.png" alt="">
                <p classe="text-white" v-else>Lingua Originale: {{ movie.original_language }}</p>

                <div class="vote">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="index in 5"
                        :class="Math.floor(movie.vote_average / 2) > index" />
                </div>

                <p calss="overview"> Overview:
                    {{ movie.overview }}
                </p>


                <div class="image">
                    <img class="img-fluid" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card_movie {
    height: 500px;
    width: 300px;
    background-color: black;
    color: white;
    margin-bottom: 2rem;
    overflow: hidden;
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

.fa-star {
    color: gold;
}
</style>