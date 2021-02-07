<template>
  <div id="app">
    <h1 v-html = "title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew" placeholder="回车添加一项"></input>
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <button class="btn btn-danger" @click="clearall">清除所有</button>
  </div>
</template>


<script>
import Store from './store'
export default {
  data:function(){
    return {
      title:"This is a Todolist",
      items:Store.fetch(),
      newItem:""
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish:function(item){
      item.isFinished = !item.isFinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        "isFinished":false 
      })
      this.newItem=""
    },
    clearall:function(){
      Store.clearall()
      window.location.href="/"
      window.location.reload
    },
    clear:function(key){
      Store.clear(key)
      window.location.href="/"
      window.location.reload
    }
  }
}
</script>

<style>
.finished{
  text-decoration:line-through;
}
li{
  list-style:none;
  font-size:1.6em;
  margin-top:10px;
}
</style>