<template>
  <div id="app">
      <router-view/>
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
