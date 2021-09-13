<template>
  <h2>hello vue3 根组件</h2>
  <h3>{{ name }}</h3>
  <button @click="change()">点击更改</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  // 启动函数
  setup() {
    // 使用reactive函数定义响应式对象数据
    const obj = reactive({ name: "ls", age: 18 });
    const obj2 = toRefs(obj);
    const change = () => {
      obj.name = "zs";
    };
    return {
      ...obj2,
      change,
    };
  },
};
</script>

<style></style>
