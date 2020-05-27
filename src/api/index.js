import request from '@/utils/request'

//获取注册协议
export function getRegProtocol(params) {
    return request({
        url: '/active/list',
        method: 'get',
        params
    })
}

export function login(data) {
    return request({
      url: 'Qbw/user_login',
      method: 'Post',
      data
    })
  }
