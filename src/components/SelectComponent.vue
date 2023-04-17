<template>
    <div class="container p-4">
        <select class="form-select" aria-label="Default select example">
            <option selected>Type card</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectComponent',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>


select{
    width: 200px;
}
</style>