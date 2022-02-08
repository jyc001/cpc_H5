<template>
  <div id="app">
    <router-view/>
    <el-divider/>
    <span style="text-align: right;display: block; margin-right: 6px;font-size: 17px;color: #999;">©2022 蒋奕成</span>
  </div>
</template>

<script>

import {mapState} from "vuex";
import store from "@/store";

export default {
  name: 'app',
  data() {
    return {
      cpc_data: store.state.cpc_data,

    }
  },

}
</script>

<style>
</style>
