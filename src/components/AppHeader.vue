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

        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand mx-5 text-danger" href="#">BoolFlix</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-white active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-white" href="#">SerieTV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-5 text-white" href="#">Film</a>
                        </li>
                    </ul>
                    <SearchBox @searchData="searchMovie_Series"></SearchBox>
                </div>
            </div>
        </nav>







        <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>-->




    </header>
</template>