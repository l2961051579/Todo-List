<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="请输入备忘录"
            v-on:keyup.enter="addTodo"
        />  <!--autofocus是页面进来自动选中,placeholder是在未输入时的填充字，keyup.enter是只有敲了enter才会执行addTodo-->
        <Item
        v-bind:todo="todo"  
        v-for="todo in filteredTodos"
        v-bind:key="todo.id"
        v-on:del="deleteTodo"/><!--为todo绑定一个属性“todo”，循环列出过滤之后的todos列表“filterTodos”，然后绑定一个id，接着设置事件del触发deleteTodo-->
        <Tabs 
        v-bind:filter="filter" 
        v-bind:todos="todos"
        v-on:toggle="toggleFilter"
        v-on:clearAllCompleted="clearAllCompleted"/><!---->
    </section>
</template>

<script>
//引入子组件item和tabs
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=0  //设置id=0
export default {
    data(){
        return {
            todos:[],    
            filter:'全部'  //filter现在的状态是“全部”
        }
    },
    components:{
        Item,
        Tabs,
    },
    computed:{  //添加计算属性，实现根据是否已完成来分栏
        filteredTodos(){
            if(this.filter==='全部'){
                return this.todos
            }
            const completed = this.filter==='已完成'  //判断completed的值是不是‘已完成’，是就等于true，不是就等于false
            return this.todos.filter(todo =>completed===todo.completed)
        }
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
                id:id++,
                content:e.target.value.trim(),
                completed:false
            })
            // 让增加的项不会挤掉“请输入备忘录”几个字
            e.target.value=''  
        },
        deleteTodo(id){
            this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1);  //splice是删除数组节点的一个方法

        },
        toggleFilter(state){
            this.filter=state
        },
        clearAllCompleted(){
            this.todos = this.todos.filter(todo=>!todo.completed)
        }
    }
}
</script>

<style lang='stylus' scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>