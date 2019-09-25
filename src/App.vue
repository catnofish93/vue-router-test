<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!-- <router-link to="/foo/foo1/yuan" class="tab">Go to Foo</router-link>
      <router-link to="/bar/bar2/yuan" class="tab">Go to Bar</router-link>
      <router-link to="/defaultss"  class="tab">default</router-link> -->
      <a class="tab" @click="to_page('/foo')">Go to Foo</a>
      <a class="tab" @click="to_page('/bar')">Go to Bar</a>
      <a class="tab" @click="to_page('/default')">default</a>
    </p>
    <button @click="next">前进</button>
    <button @click="last">后退</button>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    to_page(path){
      this.$router.replace({path:path})
    },
    next(){
      this.$router.go(1)
    },
    last(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
