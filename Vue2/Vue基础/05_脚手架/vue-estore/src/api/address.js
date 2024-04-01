import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('/address/list')
}

export const addAddress = (data) => {
  return request.post('/address/add', data)
}
