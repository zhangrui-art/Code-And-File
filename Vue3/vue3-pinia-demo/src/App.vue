<script setup>
import Son1Com from '@/components/Son1Com.vue';
import Son2Com from '@/components/Son2Com.vue';
import { useCounterStore } from '@/store/counter';
import { useChannelStore } from '@/store/channel';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore();
const channelStore = useChannelStore();
const { msg, count } = storeToRefs(counterStore);

</script>

<template>
  <div>
    <h3>App.vue根 - {{ counterStore.msg }} -- {{ counterStore.count }}</h3>
    <div>我是解构后使用的值- {{ msg }} -- {{ count }}</div>
    <div>我是双倍count - {{ counterStore.doubleCount }}</div>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="channelStore.getChannelList()">获取列表</button>
    <div v-if="channelStore.channelList.length">
      <div v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>
