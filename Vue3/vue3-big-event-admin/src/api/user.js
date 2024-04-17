import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', {
    username,
    password,
    repassword
  })

export const userLoginService = ({ username, password }) => {
  console.log(username, password)
  return request.post('/api/login', {
    username,
    password
  })
}

export const userGetInfoService = () => request.get('/my/userinfo')

export const userUpdateInfoService = (data) => request.put('/my/userinfo', data)

export const userUpdateAvatarService = (data) =>
  request.patch('/my/update/avatar', data)

export const userUpdatePasswordService = (data) =>
  request.patch('/my/updatepwd', data)
