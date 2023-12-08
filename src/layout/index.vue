<script setup>
import Aside from "./Aside.vue";
import Main from "./Main.vue";
</script>

<template>
  <div class="layout-root">
    <div class="layout-aside">
      <Aside></Aside>
    </div>
    <div class="layout-main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped>
.layout-root {
  width: 100%;
  height: 100%;
  display: flex;

  .layout-aside {
    width: 230px;
    height: 100%;
  }

  .layout-main {
    flex: 1;
    height: 100%;
  }
}
</style>
