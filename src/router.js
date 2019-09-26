import VueRouter from 'vue-router'
import foo from "./components/foo.vue"
import bar from "./components/bar.vue"
import children from "./components/children.vue"
import defaults from "./components/default.vue"

const routes=[
    { path: '/foo', component: ()=>import("./components/foo.vue") },
    { path: '/bar', component: ()=>import("./components/bar.vue") },
    {path:"/default",component:()=>import("./components/default.vue")}
]
const router=new VueRouter({
    routes,
    scrollBehavior(to,from,savedPosition){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve({x:0,y:500})
            },500)
        })
    }
})
export default router