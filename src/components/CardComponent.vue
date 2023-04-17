<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="text-center mb-5">
            <div>
                <img :src="caracter.card_images[0].image_url" :alt="caracter.name">
            </div>
            <div>
                <h4 class="text-uppercase mt-4">{{ caracter.name }}</h4>
                <p class="mb-2">{{ caracter.archetype }}</p>
            </div>
        </div>
    </div>
</template>

<script>
 
export default {
    name: 'CardComponent',
    props: ['caracter'],
    data () {
        return {

        }
    },
  mounted() {
     
     
  }
}
</script>

<style lang="scss" scoped>
img{
    width: 150px;
}

</style>