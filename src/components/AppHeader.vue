<script>
import SearchBox from './SearchBox.vue';
import { store } from './store.js';
import axios from 'axios'

export default {
    name: "AppHeader",
    componenst: (SearchBox),
    data() {
        return {
            store
        };
    },
    methods: {
        searchMovie() {
            console.log(this.store.searchText);
            const searchText = this.store.searchText;
            const urlMovie = `${this.store.API_URL}&query=${searchText}`;
            const urlSeries = `${this.store.API_URL_Series}&query=${searchText}`;
            console.log(urlMovie);


            axios.get(urlMovie, urlSeries)
                .then(resp => {
                    console.log(resp);
                    this.store.movies = resp.data.results;
                    this.store.series = resp.data.results;
                });

        },
    },
    components: { SearchBox }
}
</script>

<template>
    <header>
        <div class="search">
            <SearchBox @searchData="searchMovie"></SearchBox>
        </div>
    </header>
</template>