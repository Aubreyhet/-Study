<template>
  <div class="users">
    <ul>
        <li v-for="(user,index) in users" :key="index">
            <h2>{{user.name}}</h2>
            <h3>{{user.username}}</h3>
            <h4>{{user.email}}</h4>
        </li>
    </ul>
    <button @click="deleteUser">删除</button>
  </div>
</template>
// 传值：string  number Boolean
// 引用：array object
<script>
export default {
  name: 'users',
  props: {
      users:{
          type:Array,
          required:true
      }
  },
  data () {
    return {
        
    }
  },
  methods:{
      deleteUser:function(){
          this.users.pop()
      }
  }
}
</script>

<style scoped>
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border:1px solid #222;
    margin: 10px;
}
</style>
