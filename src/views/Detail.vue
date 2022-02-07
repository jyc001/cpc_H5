<template>
  <div id="Detail" style="flex: auto;width: auto">
    <el-card class="box-card" style="">
      <div slot="header" class="clearfix">
        <h3 style="text-align: center">{{ detail.title }}</h3>
      </div>
      <div class="text item">
        <img v-for="i in detail.img" :src="i" style="text-align: center"/><br/>
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
      detail: store.state.cpc_data[this.$route.params.id1].details[this.$route.params.id2]
    }
  },

}
</script>

<style scoped>

</style>