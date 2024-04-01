// 约定一个通用键名
const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'shopping_history'

export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}
export const setInfo = (data) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(data))
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
export const getHistory = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
export const setHistory = (data) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(data))
}
