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
                <a class="navbar-brand text-danger" href="#">Netfilx</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Serie Tv</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white active" aria-current="page" href="#">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">La mia lista</a>
                        </li>



                    </ul>


                    <div class="d-flex" role="search">
                        <SearchBox @searchData="searchMovie_Series"></SearchBox>
                    </div>


                </div>
            </div>
        </nav>








        <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>-->




    </header>
</template>