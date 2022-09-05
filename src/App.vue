<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- Detail页面不缓存 -->
      <router-view/>
      <!-- 显示当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!-- --host 0.0.0.0：webpack-dev-server不支持IP地址访问 -->
<style>
  #app{
    /* background:linear-gradient(to right, rgb(205, 153, 185) , rgb(131, 163, 236)); */
    background:linear-gradient(to right, #BE93C5,#7BC6CC)
  }
</style>
