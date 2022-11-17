<script>

import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './components/store'

export default {
  name: 'App',
  components: {

    AppHeader,
    AppMain,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // TODO: gestire la chiamata anche per le serie tv
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.movies = response.data.geners
          this.store.series = response.data.results
        })
        .catch(err => {
          console.error(err.message)
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL, this.store.API_URL_Series)
  }
}
</script>


<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>

</template>



