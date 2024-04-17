import axios from 'axios'
export const imgUrlToFile = async (url, fileName) => {
  // 使用axios下载图片数据
  const res = await axios.get(url, {
    responseType: 'arraybuffer'
  })

  // 将下载的数据转换为blob对象
  const blob = new Blob([res.data], {
    type: res.headers['content-type']
  })

  // 将blob对象转换为file对象
  const file = new File([blob], fileName, {
    type: blob.type
  })
  return file
}
