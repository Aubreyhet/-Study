<template>
  <div>
    <h2>hello vue3 根组件</h2>
    <h3>{{ name }}</h3>
    <button @click="change()">点击更改</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // 启动函数
  setup() {
    // 使用ref函数定义响应式简单数据
    const name = ref("aubrey");
    const change = () => {
      console.log(name.value);
      name.value = "song";
    };
    return {
      name,
      change,
    };
  },
};
</script>

<style></style>
