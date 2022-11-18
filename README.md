# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

 <!--
    <div class="col position-relative">
        <div class="card_movie">
            <div class="movie px-2 my-2">


                <h6 class="text-white"> Titolo:<span class="text-secondary"> {{ movie.title || movie.name }}</span></h6>
                <h6 class="text-white"> Titolo Originale:<span class="text-secondary"> {{ movie.original_title ||
                        movie.original_name
                }}</span></h6>
                <img class="img-fluid flag rounded-circle" v-if="movie.original_language === 'it'"
                    src="../assets/img/ita.png" alt="">
                <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'en'"
                    src="../assets/img/eng.webp" alt="">
                <img class="img-fluid flag rounded-circle " v-else-if="movie.original_language === 'es'"
                    src="../assets/img/spa.png" alt="">
                <img class="img-fluid flag rounded-circle" v-else-if="movie.original_language === 'fr'"
                    src="../assets/img/france.png" alt="">
                <p classe="text-white" v-else>Lingua Originale: <span class="text-secondary">{{ movie.original_language
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

            </div>
        </div>
    </div>
-->