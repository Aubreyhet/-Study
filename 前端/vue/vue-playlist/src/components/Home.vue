<template>
  <div id="home">
    <app-header @titleChanged='updateTitle($event)' :title="title"></app-header>
    <users :users='users'></users>
    <users :users='users'></users>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
// 局部注册自减
import Users from './Users.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'home',
  data(){
    return{
      users:[
            // {name:'Henry',position:'web开发',show:false},
            // {name:'Ienry',position:'java哥',show:false},
            // {name:'Jenry',position:'ui妹',show:false},
            // {name:'Kenry',position:'产品狗',show:false},
            // {name:'Lenry',position:'数据库',show:false},
            // {name:'Menry',position:'架构师',show:false},
            // {name:'Nenry',position:'项目经理',show:false},
            // {name:'Oenry',position:'总监',show:false},
            // {name:'Penry',position:'打杂',show:false},
        ],
        title:'传值'
    }
  },
  methods:{
    updateTitle:function(title){
      this.title = title;
    }
  },
  created:function(){
      this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
            this.users = data.body;
        })
  },
  components: {
    'users':Users,
    'app-header':Header,
    'app-footer': Footer
  }
}
</script>


<style scoped>
h1{
  color: purple;
}
</style>