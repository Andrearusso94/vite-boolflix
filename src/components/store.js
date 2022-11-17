import { reactive } from 'vue'


export const store = reactive({

    API_URL: 'https://api.themoviedb.org/3/search/multi?api_key=c09cd71017128f451dd7a6c5f694dcac',
    movies: null,

    error: null,



})