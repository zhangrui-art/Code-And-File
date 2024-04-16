<script setup>
import { ref, onMounted } from 'vue'
import { artGetChannelsService } from '@/api/article'
const channelList = ref([])
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  console.log(channelList.value)
}
onMounted(() => {
  getChannelList()
})
// const channelId = defineModel()
defineProps({
  modelValue: { type: [Number, String] }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    placeholder="请选择频道"
  >
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :value="item.id"
      :label="item.cate_name"
    ></el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>
