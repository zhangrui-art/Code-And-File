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
