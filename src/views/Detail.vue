<template>
  <div id="Detail">
    <el-page-header @back="goBack" :content="detail.name"/>
    <el-card class="box-card" style="margin-top: 10px">
      <div slot="header" class="clearfix">
        <h3 style="text-align: center">{{ detail.name}}</h3>
      </div>
      <div class="text item">
        <img :src="detail.img" style="text-align: center"/><br/>
        <span v-html="detail.text"></span>
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