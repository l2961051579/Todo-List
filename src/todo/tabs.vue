<template>
    <div class="helper">
        <span class="left">还有{{unFinishedTodoLength}}项剩余</span>
        <span class="tabs">
            <span 
            v-for="state in states" 
            v-bind:key="state"
            v-bind:class="[state,filter === state ? 'actived' : '']"
            v-on:click="toggleFilter(state)">
            {{state}}<!--filter表示现在选中的状态-->
            </span>
        </span>
        <span class="clear" v-on:click="clearAllCompleted">清除所有完成项</span>
    </div>
</template>

<script>
import { type } from 'os'
import { METHODS } from 'http'
export default {
    props:{
        filter:{
            type:String,
            require:true,
        },
        todos:{
            type:Array,
            require:true,
        }
    },
    computed:{
        unFinishedTodoLength(){
            return this.todos.filter(todo=>!todo.completed).length
        }
    },  //计算数据发生变化的次数
    data(){
        return {
            states:['全部','待办','已完成']
        }
    },
    methods:{
        toggleFilter(state){
            this.$emit('toggle',state)
        },
        clearAllCompleted(){
            this.$emit('clearAllCompleted')
        },
    }
}
</script>

<style lang='stylus' scoped>
.helper
    font-weight 100
    display flex
    justify-content space-between
    padding 5px 0
    line-height 30px
    background-color #ffffff
    font-size 14px
    font-smoothing antialiased
.left, .clear, .tabs
    padding 0 10px
.left .clear
    width 150px
.left
    text-align center
.clear
    text-align right
    cursor pointer
.tabs
    width 200px
    display flex
    justify-content space-between
    *
        display inline-block
        padding 0 10px
        cursor pointer
        border 1px solid rgba(175,47,47,0)
        &.actived
            border-color rgba(175,47,47,0.4)
            border-radius 5px
</style>