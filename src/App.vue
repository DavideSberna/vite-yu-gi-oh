 

<template>
  <header>
    <HeaderComponent title="Yu-Gi-Oh Api"/>
  </header>
  <main>
    <MainComponent @on-archetype-main-change="getCharacters()" @restart-type="resetSearchType()"/>
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
        
      }
    },
    methods: {
    getCharacters() {
        
      let url = store.baseUrl + store.endpoint;

      
        let options = {};
        let params = {}
        for(let key in store.search){
          if(store.search[key]){
            params[key]= store.search[key]
          }
        }
        console.log(params)
         
        if(Object.keys(params).length > 0){
          options.params = params
        }  
         

      axios.get(url, options).then((res) => {
        store.characterList = res.data.data;  
      });
       
      axios.get(store.baseUrlArchetype).then((res) => {
        store.characterArchetypeList = res.data;
         
      });
      
    },
    resetSearchType(){
      store.search.archetype = '';
      store.search.fname = '';
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
