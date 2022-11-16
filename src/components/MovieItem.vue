<script>
export default {
    name: 'MovieItem',
    props: {
        movie: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="movie my-2">

            <h5>{{ movie.title }}</h5>
            <h4 class="text-secondary">{{ movie.original_title }}</h4>
            <img class="img-fluid rounded-circle" v-if="movie.original_language === 'it'" src="../assets/img/ita.png"
                alt="">
            <img class="img-fluid" v-else-if="movie.original_language === 'en'" src="../assets/img/eng.webp" alt="">
            <img class="img-fluid" v-else-if="movie.original_language === 'fr'" src="../assets/img/france.png" alt="">
            <p v-else>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 25px;
    height: 25px;
}
</style>