<template>
  <div id="Detail">
    <el-card class="box-card" style="max-width: 80vw">
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