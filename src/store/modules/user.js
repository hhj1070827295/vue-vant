// // logout
// import { login, getInfo } from '@/api/user'
import { getToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '我是name',
  userInfo: '',
  account: ''
}

const mutations = {
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

