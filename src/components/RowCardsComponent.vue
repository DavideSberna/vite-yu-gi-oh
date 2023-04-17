<template>
    <div class="container d-flex justify-content-center flex-wrap">
        <CardComponent v-for="(items, index) in store.characterList" :caracter="items" />
         
    </div>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'RowCardComponent',
    components:{
        CardComponent,
    },
    data () {
        return {
            store

        }
    },
  mounted() {
    console.log(store.characterList);
     
  }
}
</script>

<style lang="scss" scoped>

</style>