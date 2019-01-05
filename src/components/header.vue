<template>
<div id="header">
    <div class="headerContent">
<<<<<<< HEAD
    	<p style="color:#8492A6;font-size:20px">装配式建筑信息管理系统</p>
=======
    	<p style="color:#8492A6">装配式建筑信息系拒绝统</p>
>>>>>>> f8d44a6727fe672b6a9445fab98c81da46cc08c9
    </div>
    <div style="width:20%;float:left;padding-top:15px">
    	<p>{{ "当前用户：" + currentUser}}</p>
    </div>
    <!-- <div style="float:margin-right;padding-top:22px">
      <el-button type="primary" @click="logout">退出</el-button>
    </div> -->
</div>
</template>

<script>
export default{
     data() {
      return {
        currentUser: ''
      }
    },
    methods: {
      //查询所要显示的表格，或者刷新该表格使用
      findUser() {
        //初始显示表格用的查询数据
        //当前多少页 一页多少条
        this.$http.get(this.HOST + "/userInfo").then(response => {
          this.currentUser = response.data.userType;
        }).catch(error => {
          
        })
      },
      logout() {
        //初始显示表格用的查询数据
        //当前多少页 一页多少条
        //window.location.href="http://localhost:8080/absmis/login"
      }

    },
    //watch负责监听，当监听对象发生变化时，运行对应的方法
    watch: {},
    //页面加载时运行
    created() {
      this.findUser()
    }
} 
</script>
<style type="text/css">
	#header{
		width: 100%;
		/* margin: 0 auto; */
	}
  .headerContent{
    font-size: 29px;
  
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    color: #000000;
    width: 70%;
    float: left;
    
    padding-left: 5px !important;
    text-align: left;
    line-height: 30px;
  }
</style>
