<template>
  <div>
    <div>鼠标坐标X{{ x }}</div>
    <div>鼠标坐标Y{{ y }}</div>
    <hr />
    <div>{{ count }}</div>
    <button @click="add">累加</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue";
export default {
  // 启动函数
  setup() {
    // 鼠标坐标数据
    const mouse = reactive({
      x: 0,
      y: 0,
    });
    // 定义鼠标移动触发事件
    const move = (e) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    };
    // 定义简单数据类型
    const count = ref(0);
    // 定义累加方法
    const add = () => {
      count.value += 1;
    };
    // 在组件挂载的时候监听鼠标移动事件
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });

    onUnmounted(() => {
      document.removeEventListener("mousemove", move);
    });

    return { ...toRefs(mouse), count, add };
  },
};
</script>

<style></style>
