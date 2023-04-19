<template>
    <section class="container">
        <div>
            <SelectComponent @on-archetype-change="archetypeChangeHandler()" @reset-type-btn="archetypeReset()"/>
        </div>
        <div class="rowCard pt-5">
            <RowCardsComponent/>
        </div>
    </section>
</template>

<script>
import { store } from '../data/store';
import SelectComponent from './SelectComponent.vue';
import RowCardsComponent from './RowCardsComponent.vue';
export default {
    name: 'MainComponent',
    emits: ['onArchetypeMainChange', 'restartType'],
    components:{
        SelectComponent,
        RowCardsComponent,
    },
    data () {
        return {
            store,
            

        }
    },
    methods:{
         archetypeChangeHandler(){
            this.$emit('onArchetypeMainChange');
         },
         archetypeReset(){
            this.$emit('restartType');
         }
    },
    
}
</script>

<style lang="scss" scoped>
.rowCard{
    background-color: #f7f7f7;
}

</style>