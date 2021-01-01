import request from '@/utils/request'
const baseURL = 'http://101.37.87.30:3000/api'
const qs = require('qs');

export function upload (data) {
    return request({
      url: baseURL + '/upload',
      method: 'post',
      data
    })
  }

// 登录
export function login (data) {
    console.log(data)
    return request.post(baseURL + '/login', qs.stringify({...data}) )
}