<script setup>
import routes from "@/router/routes.js";
import {computed} from "vue";
import {useRouter} from 'vue-router';
import log from "@/assets/image/logo.png"

const router = useRouter();
const menuList = routes[0].children.filter(route => {
  return route.meta&&!route.meta.isHide
});

const activeName = computed(() => {
  return router.currentRoute.value.name;
})

function toNewRoute(pathName) {
  router.push({name: pathName});
}
</script>

<template>
  <div class="aside">
    <div class="log">
      <img :src="log" alt="Log">
    </div>
    <ul class="name-list">
      <li @click="toNewRoute(route.name)" v-for="route in menuList" :key="route.name" :class="[activeName===route.name?'name-item_active':'name-item']">{{ route.meta.title }}</li>
      <!--      <li @click="toNewRoute(route,route.meta.title)" class="name-item" v-for="route in menuList" :key="route.meta.title" :class="{'name-item_active':activeName===route.meta.title}">{{ route.meta.title }}</li>-->
    </ul>
  </div>
</template>

<style scoped>
.aside {
  width: 230px;
  height: 100%;
  background: #232E4EFF;
  overflow: hidden;

  .log {
    width: 139px;
    height: 31px;
    margin: 40px auto;
  }

  .name-list {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;

    .name-item {
      height: 54px;
      color: #FFFFFFB3;
      text-align: center;
      line-height: 54px;
      border-right: 4px solid #232E4EFF;
    }

    .name-item:hover {
      border-right: 4px solid #48a8ce;
      background: #3D4867FF;
      color: #ffffff;
    }

    .name-item_active {
      height: 54px;
      text-align: center;
      line-height: 54px;
      border-right: 4px solid #48a8ce;
      background: #1b2136;
      color: #ffffff;
    }
  }
}
</style>
