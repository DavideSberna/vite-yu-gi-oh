<template>
    <div class="header d-flex align-items-center ps-2 pt-3 pe-2 pb-3">
        <div class="pe-2">
            <img src="https://www.pngitem.com/pimgs/m/172-1722643_yugioh-logo-png-yu-gi-oh-logo-transparent.png" alt="">
        </div>
        <div>
            <h1>Yu-Gi-Oh Api</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

.header{
    background-color: #f7f7f7;
    img{
        width: 100px;
    }
}


</style>