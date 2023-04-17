 

<template>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <MainComponent/>
  </main>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'

  export default {
    name:'App',
    components:{
      HeaderComponent,
      MainComponent,
    },
    data(){
      return{
        store,
        axios,
      }
    },
    methods: {
    getCharacters() {
      const url = store.baseUrl + store.endpoint;
      axios.get(url).then((res) => {
        store.characterList = res.data.data;
        console.log(res.data.data)
        
         
      });
      
    }
  },
  mounted() {
    store.endpoint = 'cardinfo.php?num=50&offset=0'
    this.getCharacters();
     
  }
    
  }
</script>

<style lang="scss" scoped>
 main{
  background-color: #d48f38;
 }

</style>
