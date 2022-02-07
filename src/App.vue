<template>
  <div id="app">
    <el-container>
    <el-aside style="max-width: 35vw;flex: auto;font-size: 1vmax">
      <el-menu :router="true" style="border: 1px solid #eee" :default-active="this.$store.state.selected_index">
        <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </el-menu-item>

        <el-submenu v-for="(info,index) in cpc_data" :index="`${index}`" :key="info.name">
          <template slot="title">
          <i class="el-icon-map-location"></i>
          <span>{{info.name}}</span>
          </template>
          <el-menu-item  v-for="(detail,subIndex) in info.details" :index="`/detail/${index}/${subIndex}`" :key="detail.title">{{detail.title}}</el-menu-item>
        </el-submenu>

      </el-menu>
    </el-aside>

    <el-container  style="font-size: 1vmax">
      <el-header style="text-align: left; background-color: #b2becf;flex: auto;">
          <h4>"一图”释精神——描绘百年奋斗精神谱 H5作品</h4>

      </el-header>
    <el-main>
      <router-view/>
    </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>

import {mapState} from "vuex";
import store from "@/store";

export default {
  name: 'app',
  data(){
    return {
      cpc_data: store.state.cpc_data,

    }
  },

}
</script>

<style>
</style>
