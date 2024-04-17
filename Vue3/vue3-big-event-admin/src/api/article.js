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

export const artGetListService = ({ pagenum, pagesize, cate_id, state }) =>
  request.get('/my/article/list', {
    params: {
      pagenum,
      pagesize,
      cate_id,
      state
    }
  })

export const artAddListService = (data) => request.post('/my/article/add', data)

export const artUpdateListService = (data) =>
  request.put('/my/article/info', data)

export const artGetArticleInfoService = (id) =>
  request.get('/my/article/info', {
    params: {
      id
    }
  })

export const artDeleteInfoService = (id) =>
  request.delete('/my/article/info', {
    params: {
      id
    }
  })
