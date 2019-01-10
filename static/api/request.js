import axios from 'axios'
var HTTP = {
  serverUrl: serverUrl, // 服务器接口地址
  userName: null, // 用户名
  passWord: null, // 密码
  JWTToken: null,
  userId: null,
  sessionId: null,
  token: null,
  isAndroid: false,
  isiOS: false,
  isPc: false,
  // 设置用户名
  setuserName: function () {
    this.userName = localStorage.getItem('userName')
  },
  // 设置密码
  setpassWord: function () {
    this.passWord = localStorage.getItem('passWord')
  },
  setToken: function () {
    this.JWTToken = localStorage.getItem('jwtToken')
  },
  setSessionId: function () {
    this.sessionId = localStorage.getItem('sessionId')
  },
  // 当前客户端的类型
  setClientType: function () {
    var u = navigator.userAgent // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36
    // var app = navigator.appVersion
    this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
    this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    this.isPc = !(u.indexOf('Android') > 0 || u.indexOf('iPhone') > 0 || u.indexOf('iPad') > 0)
  },
  // 检验code是否成功
  vCode: function (res) {
    console.log(res)
    if (res.data.code === 200) {
      var token = res.data.token
      if (token !== null && token !== undefined && token !== '') {
        localStorage.setItem('jwtToken', token.jwtToken)
      }
      return true
    } else {
      token = res.data.token
      if (token !== null && token !== undefined && token !== '') {
        localStorage.setItem('jwtToken', token.jwtToken)
      }
      // if (res.data.code === 100) {
      // }
      return false
    }
  },
  // post方式
  post: function (url, data, success, errors) {
    axios({
      method: 'POST',
      url: this.serverUrl + url,
      withCredentials: true,
      data: data
    }).then(function (res) { // 接口返回成功
      if (HTTP.vCode(res)) { // 接口成功
        if (success) {
          success.call(this, res, true)
        }
      } else { // 接口报错
        if (errors) errors.call(this, res, true)
      }
    }).catch(function (e) { // 网络出错
      if (errors) errors.call(this, e)
    })
  },
  // get方式
  get: function (url, success, error) {
    axios({
      method: 'GET',
      url: this.serverUrl + url,
      headers: {
        'JWTToken': localStorage.getItem('jwtToken')
      },
      withCredentials: true
    }).then(function (res) { // 接口返回成功
      if (HTTP.vCode(res)) { // 接口成功
        if (success) success.call(this, res, true)
      } else { // 接口报错
        if (error) error.call(this, res, true)
      }
    }).catch(function (e) { // 网络出错
      if (error) error.call(this, e)
    })
  }
}
HTTP.setIP()
HTTP.setuserName()
HTTP.setpassWord()
HTTP.setToken()
export default HTTP
