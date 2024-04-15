import request from '@/utils/request'

export const artGetChannelsService = () => request.get('/my/cate/list')

export const artAddChannelsService = ({ cate_name, cate_alias }) =>
  request.post('/my/cate/add', {
    cate_name,
    cate_alias
  })

export const artUpdateChannelsService = ({ id, cate_name, cate_alias }) =>
  request.put('/my/cate/info', {
    id,
    cate_name,
    cate_alias
  })

export const artDeleteChannelsService = (id) =>
  request.delete('/my/cate/del', {
    params: {
      id
    }
  })
