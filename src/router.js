import VueRouter from 'vue-router'
import foo from "./components/foo.vue"
import bar from "./components/bar.vue"
const routes=[
    { path: '/foo/:id/:name', component: foo },
    { path: '/bar/:id/:name', component: bar },
    { path:'/default**',component:resolve => require(["./components/default.vue"],resolve)}
]
const router=new VueRouter({
    routes
})
export default router