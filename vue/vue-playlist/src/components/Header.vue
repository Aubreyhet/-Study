<template>
  <div class="header" @click="changeTitle">
    <h1>{{title1}}{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
      title:{
          type:String,
      }
  },
  data () {
    return {
        title1:'这个是头部组件'
    }
  },
  methods:{
      changeTitle:function(){
        //   this.title = 'changed'
        this.$emit('titleChanged','子传父')
      }
  },
//   beforeCreate:function(){
//       alert('组件实例化之前执行的函数');
//   },
//   created:function(){
//       alert('组件实例化完毕 但是页面还未显示')
//   },
//   beforeMount:function(){
//       alert('组件挂载前，页面任未展示，但是虚拟dom已经配置')
//   },
//   mounted:function(){
//       alert('组件挂载后，此方法执行后，页面显示')
//   },
//   beforeUpdate:function(){
//       alert('组件更新前，页面任未更新，但是虚拟dom已经配置了')
//   },
//   updated:function(){
//       alert('组件更新，此方法执行后，页面显示')
//   },
//   beforeDestroy:function(){
//       alert('组件销毁前')
//   },
//   destroyed:function(){
//       alert('组件已经被销毁')
//   }
}
</script>

<style scoped>
.header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color:#222;
    text-align: center;
}
</style>
