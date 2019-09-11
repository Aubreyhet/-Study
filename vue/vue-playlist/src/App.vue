<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link to='/'>Home</router-link></li>        
        <li><router-link to='/hello'>hello</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 局部注册自减

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  methods:{
    
  },
  
}
</script>


<style scoped>
h1{
  color: purple;
}
</style>