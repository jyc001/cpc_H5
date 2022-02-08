<template>
  <div id="Home" style="text-align: center">
    <h2>"一图”释精神——描绘百年奋斗精神谱</h2>
    <h3>H5 作品</h3>
    <el-row>
      <el-col v-for="(item, index) in cpc_data" :key="item.name" :offset="index%2===0?0:2" :span="11"
              style="padding: 10px">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" style="width: 100%">
          <img :src="item.img"
               class="image">
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
          </div>
          <div class="bottom clearfix">
            <time class="time">{{ item.date }}</time>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Home",
  data() {
    return {
      cpc_data: store.state.cpc_data,

    }

  },
  computed: {
  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>