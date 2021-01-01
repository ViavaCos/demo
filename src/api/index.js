import request from '@/utils/request'
const baseURL = 'http://101.37.87.30:3000/api'

export function upload (data) {
    return request({
      url: baseURL + '/upload',
      method: 'post',
      data
    })
  }

// 登录
export function login (data) {
    return request({
        url: baseURL + '/login',
        method: 'post',
        data
    })
}