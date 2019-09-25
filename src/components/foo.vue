<template>
    <transition name="slide">
        <div>
            <div>foo-{{id}}</div>
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        id:{
            type:Number,
            default:""
        }
    },
    mounted(){
    },
    beforeRouteEnter (to, from, next) {
        // ...
        next(vm => {
            console.log(vm)
        })
    },
    beforeRouteLeave (to, from, next) {
        // ...
        next()
        console.log(this,"leave");
    }
}
</script>
<style scoped>

</style>