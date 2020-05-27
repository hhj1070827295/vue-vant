const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,
  account: state => state.user.account
}
export default getters
