import VueRouter from 'vue-router'
import foo from "./components/foo.vue"
import bar from "./components/bar.vue"
import children from "./components/children.vue"
import defaults from "./components/default.vue"
const routes=[
    { path: '/foo', component: foo ,children:[{component:bar,path:"bar",meta:{requiresAuth:true}}]},
    {path:"/default",component:defaults}
]
const router=new VueRouter({
    routes
})
export default router