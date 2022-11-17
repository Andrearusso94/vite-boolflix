<script>
import { store } from './store.js'
export default {
    name: 'SearchBox',
    emits: ['searchData'],
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <input type="search" class="form-control mx-5 me-2" @keyup.enter="$emit('searchData')" placeholder="Search"
        aria-label="Search" v-model="store.searchText">
    <button type="submit" class="btn btn_click" @click="$emit('searchData')">Search</button>
</template>

<style lang="scss" scoped>
.btn_click {
    background-color: #E40715
}
</style>