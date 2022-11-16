import { reactive } from 'vue'


export const store = reactive({
    API_URL_2: 'https://api.themoviedb.org/3/search/tv?api_key=c09cd71017128f451dd7a6c5f694dcac',
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=c09cd71017128f451dd7a6c5f694dcac',
    movies: null,
    series: null,
    error: null,



})