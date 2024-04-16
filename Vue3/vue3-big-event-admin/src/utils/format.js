import { dayjs } from 'element-plus'

export const formatTime = (time) => dayjs(time).format('MM/DD/YYYY HH:mm:ss')
