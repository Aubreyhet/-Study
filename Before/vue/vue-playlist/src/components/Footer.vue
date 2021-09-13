<template>
  <div class="footer">
    <h1>{{title2}}{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props:{
      title:{
          type:String,
      }
  },
  data () {
    return {
        title2:'这个是footer组件'
    }
  }
}
</script>

<style scoped>
.footer{
    background:lightsalmon;
    padding: 10px;
}
h1{
    color:#222;
    text-align: center;
}
</style>
