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
    <input type="search" class="form-control mx-5 me-2" placeholder="Search" aria-label="Search"
        v-model="store.searchText">
    <button type="submit" class="btn" @click="$emit('searchData')">Search</button>
</template>