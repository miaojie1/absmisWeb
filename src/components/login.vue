<template>
  <el-form ref="loginForm" class="loginForm" label-width="80px" :model="loginForm" :rules="rules" hide-required-asterisk=false>
    <span class="title">用户登录</span>
    <span class="errMsg" :v-model="errMsg"></span>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password"></el-input>
    </el-form-item>
    <el-button type="primary" style="margin-left: 10px" @click="login('loginForm')">登录</el-button>
    <el-button @click="resetField">取消</el-button>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      errMsg: '',
      showErr: false,
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (value) {
      this.$refs.loginForm.validate((value)=>{
        if (value) {
          var url = this.HOST +'/toLogin?username='+ this.loginForm.username + '&password=' + this.loginForm.password
          this.$http.post(url).then(response => {
            if (response.status === 200) {
              if (response.data.code === 200) {
                this.$router.push({
                  path: '/homePage'
                })
              } else if (response.data.code === 100) {
                this.$message({
                  message: '用户名或密码错误！',
                  type: 'warning'
                })
                this.$router.push({
                  path: '/'
                })
                this.resetField()
              }
            } else {
              this.$message({
                message: '登录出错！',
                type: 'warning'
              })
            }  
          })
        } else {
          this.$message({
            message: '请将信息填写完整！',
            type: 'warning'
          })
        }
      })
      
      // var data = {
      //   username: this.loginForm.username,
      //   password: this.loginForm.password
      // }
      // this.$API.post('/toLogin', data,
      //   success => {
      //     console.log('成功')
      //     console.log(success)
      //   },
      //   error => {
      //     console.log('出错')
      //     console.log(error)
      //   })
    },
    resetField () {
      this.loginForm.username = ''
      this.loginForm.password = ''
    }
  }
}
</script>
<style scoped>
body, html {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
}
.loginForm {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 20px 30px 20px 30px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 1.2rem;
}
.errMsg {
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  font-size: 0.8rem;
  color: red;
}
</style>

