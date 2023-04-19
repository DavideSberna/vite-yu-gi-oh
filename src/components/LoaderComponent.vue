<template>
    <div class="d-flex justify-content-center align-items-center">
        
        <font-awesome-icon icon="" />
         
    </div>
</template>

<script>
export default {
    name: 'LoaderComponent'
}
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: black;
    font-size: 4rem;
}
</style>