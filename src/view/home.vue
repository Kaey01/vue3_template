<script setup lang="ts">
import {queryAssetInfo} from "../api";

const formData = ref({
  page:1,
  size: 10
})
onMounted(() => {
  queryAssetInfo(formData.value).then((res: any) => {
    console.log(res)
  })
})
</script>

<template>
<div>
  <el-button>
    fff
  </el-button>
</div>
</template>

<style scoped>

</style>
