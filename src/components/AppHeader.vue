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
        searchMovie_Series() {
            console.log(this.store.searchText);
            const searchText = this.store.searchText;
            const url = `${this.store.API_URL}&query=${searchText}`;

            console.log(url);


            axios.get(url)
                .then(resp => {
                    console.log(resp);
                    this.store.movies = resp.data.results;

                });

        },
    },
    components: { SearchBox }
}
</script>

<template>
    <header>
        <div class="search">
            <SearchBox @searchData="searchMovie_Series"></SearchBox>
        </div>
    </header>
</template>