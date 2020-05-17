import Axios from 'axios'
import qs from 'qs'
import { Message } from 'antd'

const instance = Axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        if (config.method === 'get') {
            config.paramsSerializer = params => {
                return qs.stringify(params, { arrayFormat: 'brackets' })
            }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        let data = response.data
        if(data.status === 0) {
            return response
        } else {
            Message.error(data.msg ? data.msg : data, 2)
            return Promise.reject(data)
        }
    },
    error => {
        if (error.message === 'Network Error') {
            Message.error("服务器异常请稍后再试", 2)
            return Promise.reject()
        }
        if (error.response) {
            let data = error.response.data
            Message.error(data.msg ? data.msg : data, 2)
        } else {
            Message.error(error.message, 2)
        }
        return Promise.reject(error)
    }
)

export default instance