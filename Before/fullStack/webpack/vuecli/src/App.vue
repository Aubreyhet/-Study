<template>
  <div>
    <h1 class="title">Hello vue3</h1>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style scoped>
  .title{
    color: pink;
  }
</style>
