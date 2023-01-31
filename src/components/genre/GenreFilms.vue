<template>
    <div class="container">
        <div v-for="p in postPlaginate" :key="p.id">
            {{p.id}}
        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState([
                'postPlaginate'
            ])
        },
        created() {
            //console.log(this.postPlaginate)
        },
    }
</script>

<style lang="scss" scoped>

</style>