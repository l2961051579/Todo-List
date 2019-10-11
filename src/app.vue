<!--标准的vue组件三段式，template，script，style-->
<template>
    <div class='app'>
        <Head></Head>  <!--使用子组件head.vue，如果小写则与html标签重复不可-->
        <Todo></Todo>
        <Foot></Foot>
    </div>   
</template>

<script>
import Head from './todo/head.vue'  //引入子组件head.vue
import Foot from './todo/foot.vue'
import Todo from './todo/todo.vue'

export default{  //导出vue实例的选项对象，以便能够在别处import使用
    components:{
        Head,
        Foot,
        Todo,
    }
}
</script>

<style lang="stylus" scoped>
  .app
    position absolute  //绝对位置左上角
    left 30%  //左起30%处
    top 20%  //上起20%处
    
</style>



