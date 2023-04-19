<template>
    <!-- store.search.archetype -->
    <div class="container p-4">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Nome carta" v-model="store.search.fname">
        </div>
        <select class="form-select" v-model="store.search.archetype">
            <option :value="type.archetype_name" v-for="(type, index) in store.characterArchetypeList">{{ type.archetype_name }}</option>
        </select>
        <div>
            <button class="btn btn-outline-secondary" type="button" @click.prevent="filterArchetype()">Cerca</button>
        </div>
        <div>
            <button class="btn btn-outline-secondary" type="button" @click.prevent="resetType()">Reset</button>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'SelectComponent',
    emits: ['onArchetypeChange', 'resetTypeBtn'],
    data () {
        return {
            store,
            archetypeSelected: '',
             

        }
    },
    methods:{
        filterArchetype(){
            this.$emit('onArchetypeChange') 
        },
        resetType(){
            this.$emit('resetTypeBtn') 
        }
    }
}
</script>

<style lang="scss" scoped>


select{
    width: 200px;
}
</style>