<script>
export default {
    name: 'MovieItem',
    props: {
        movies: Object
    }
}
</script>


<template>
    <div class="col">
        <div class="movie my-2">

            <h5>{{ movie.title }}</h5>
            <h4 class="text-secondary">{{ movie.original_title }}</h4>
            <p class="text-secondary">{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>

        </div>
    </div>
</template>