import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    characterArchetypeList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    baseUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    endpoint: '',
    loading: true,
    search:{
        archetype:'',
        fname:'',
    }
     
})