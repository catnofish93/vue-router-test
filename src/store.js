import Vuex from 'vuex'
import Vue from 'vue'
import { resolve } from 'path'
Vue.use(Vuex)
const foo={
    state:{
        name:foo
    }
}
const bar={
    state:{
        name:bar
    }
}
const store=new Vuex.Store({
    modules:{
        foo:foo,
        bar:bar
    }
})
export default store