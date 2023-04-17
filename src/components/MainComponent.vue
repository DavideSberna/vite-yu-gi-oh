<template>
    <section class="container">
        <div>
            <SelectComponent/>
        </div>
        <div class="rowCard pt-5">
            <RowCardsComponent/>
        </div>
    </section>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
import RowCardsComponent from './RowCardsComponent.vue';
export default {
    name: 'MainComponent',
    components:{
        SelectComponent,
        RowCardsComponent,
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.rowCard{
    background-color: #f7f7f7;
}

</style>