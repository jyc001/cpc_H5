<template>
  <div id="Detail">
    <el-page-header @back="goBack" :content="detail.name"/>
    <img style="display: block;margin: 0 auto" :src="require(`../assets/${detail.img}`)" :alt="detail.name">
    <el-card v-for="item in detail.details" :key="item.title" class="box-card" style="margin-top: 10px">
      <div slot="header" class="clearfix">
        <h3 style="text-align: center">{{item.title}}</h3>
      </div>
      <div class="text item">
<!--        <img :src="detail.img" style="text-align: center"/><br/>-->
        <span v-html="item.content"></span>
      </div>
    </el-card>

  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Detail",
  data() {
    return {
      detail: store.state.cpc_data[this.$route.params.id]
    }
  },
  methods:{
    goBack() {
      this.$router.back()
    }
  }

}
</script>

<style scoped>

</style>