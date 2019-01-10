<template>
  <div id="indexContent">
    <div class="header">
      <!-- Header Part -->
      <index-header></index-header>
    </div>   
    <!-- Row for the main index part-->
    <div class="main">
      <!-- Left for the navigation bar -->
      <div id="navBar" class="menu">
        <nav-bar></nav-bar>
      </div>
      <!-- Right part for the view offerred by the router, with the transition effects-->
      <div class="content">
        <el-row class="viewHeader">
          <view-header></view-header>
        </el-row>
        <el-row>
          <router-view></router-view>
        </el-row>
      </div>
    </div>
    <!--Footer Part The push div used to prevent overlaping when the content is full-->
    <div class="footer">
      <index-footer></index-footer>
    </div>
  </div>
</template>
<script>
import navBar from './navBar.vue'
import indexFooter from './footer.vue'
import indexHeader from './header.vue'
import viewHeader from './viewHeader.vue'
export default {
    data: function() {
      return{} 
    },  
    components: {
      indexFooter,
      indexHeader,
      navBar,
      viewHeader
    }
}
</script>
<style>
/* * {
  box-sizing: border-box;
} */
html,body{
  height:100%;
  margin:0;
  padding:0;
}
.el-row {
  margin-left: 4pt;
  margin-bottom: 20px;
  &:last-child {
      margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.header {
  margin: 0 auto;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background: #464C5B;
}
.main {
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 20px;
  overflow: auto;
  padding-top: 10px;
}
.menu {
  width: 250px;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 20px;
  background: #464C5B;
}
.content {
  margin-left: 250px;
  overflow: auto;
}
.footer {
  width: 100%;
  color: #FFFFFF;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  height: 20px;
  line-height: 20px;
  background: rgb(100, 109, 123);
  /* background: #464C5B; */
  font-size: 8pt;
}
/* .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
} */
/* .header{
  margin-top: 0px;
  width: 100%;
  height: 10%;
  position:fixed;
  top:0;
  background-color:#E5E9F2;
}
.main{
  width:100%;
  overflow: auto;
  height: 90%;
  bottom: 30px;
  top: 58px;
  position:fixed;
  background-color: #F9FAFC; 
}
.menu{
  overflow:auto;
  position:fixed;
  height: 100%;
  width: 20%;
  float: left;
  background-color:#E5E9F2;
}
.content{
  height: 600px;
  width: 80%;
  float: right;
  background-color: #F9FAFC; 
}
.viewHeader{
  padding-top:5px;
}
.footer{
  background-color:#EFF2F7;  
  height:5%;
  width:100%;
  position:fixed;
  bottom: 0px;
  left: 0px;
} */
</style>
