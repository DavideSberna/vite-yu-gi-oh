<template>
    <div class="container d-flex justify-content-center flex-wrap" v-if="store.loading">
        <CardComponent v-for="(items, index) in store.characterList" :caracter="items" />
    </div>
    <div v-else>
        <LoaderComponent/>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './CardComponent.vue';
import LoaderComponent from './LoaderComponent.vue';
export default {
    name: 'RowCardComponent',
    components:{
        CardComponent,
        LoaderComponent,
    },
    data () {
        return {
            store

        }
    },
  mounted() {
     
     
  }
}
</script>

<style lang="scss" scoped>

</style>