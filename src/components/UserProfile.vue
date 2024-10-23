<template>
  <div>
    <h2>用户画像</h2>
    <el-button @click="showData = !showData">{{ showData ? '隐藏数据' : '显示数据' }}</el-button>
    <el-table v-if="showData && displayedData.length > 0" :data="displayedData" style="margin-top: 20px;">
      <el-table-column
        v-for="(column, index) in Object.keys(displayedData[0])"
        :key="index"
        :prop="column"
        :label="column">
      </el-table-column>
    </el-table>
    <p v-else>暂无数据可显示</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const csvData = ref([]);
const displayedData = ref([]); // 用于显示的数据
const showData = ref(false);

onMounted(() => {
  if (route.query.csvData) {
    csvData.value = JSON.parse(route.query.csvData); // 解析传递的数据
    displayedData.value = csvData.value.slice(0, 100); // 只取前100行
  }
});
</script>

<style scoped>
</style>
