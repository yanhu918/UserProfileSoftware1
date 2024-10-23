<template>
  <div>
    <div class="file-upload">
      <input type="file" @change="handleFileUpload" />
    </div>
    <el-table v-if="previewData.length > 0" :data="previewData" style="margin-top: 20px;">
      <el-table-column
        v-for="(column, index) in Object.keys(previewData[0])"
        :key="index"
        :prop="column"
        :label="column">
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Papa from 'papaparse';

const router = useRouter();
const previewData = ref([]);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    Papa.parse(file, {
      complete: (results) => {
        const parsedData = results.data; // 所有数据
        // 传递数据到用户画像页面
        router.push({ path: '/user-profile', query: { csvData: JSON.stringify(parsedData) } });
      },
      header: true,
    });
  }
}
</script>

<style scoped>
.file-upload {
  text-align: center;
}
</style>
