import { defineStore } from "pinia"
import { ref } from "vue"
import axios from "axios"


export const useChannelStore = defineStore('channel',() => {
  const channelList = ref([])
  const getChannelList = async () => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels")
    console.log(res);
    channelList.value = res.data.data.channels
  }
  return {
    channelList,
    getChannelList
  }
})