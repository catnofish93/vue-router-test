<template>
<div>
    <div>{{count}}</div>
</div>
    
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
export default {
    data(){
        return {
            count:"foo"
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>
<style scoped>

</style>