<template>
<div>
    <el-form :model="basicInfoData" label-width="180px" :rules="rules" ref="basicInfo" :inline="true" align="left" style="margin-right: 24px">
      <el-form-item label="统一社会信用代码" prop="creditCode" width="30">
          <el-input v-model="basicInfoData.creditCode"></el-input>
      </el-form-item>
      <el-form-item label="企业名称" prop="name" >
          <el-input v-model="basicInfoData.name"></el-input>
      </el-form-item>
      <el-form-item label="所在市县" prop="city">
          <el-input v-model="basicInfoData.city"></el-input>
      </el-form-item>
      <el-form-item label="法定代表人" prop="legalRepresentative">
          <el-input v-model="basicInfoData.legalRepresentative"></el-input>
      </el-form-item>
    </el-form>
    <msg-dialog ref="msgDialog"></msg-dialog>
</div>
</template>
<script>
import msgDialog from '../../common/msgDialog'
export default {
    props:['basicInfoData'],
    data(){
        var checkCreditCode=(rule,value,callback)=>{
            if(!value){
                callback(new Error("必填项"))
            }else
            callback();
        }
        var checkName=(rule,value,callback)=>{
            if(!value){
                callback(new Error("必填项"))
            }else
            callback()
        }
        var checkCity=(rule,value,callback)=>{
            if(!value){
                callback(new Error("必填项"))
            }else
            callback()
        }
        var checkLegalRepresentative=(rule,value,callback)=>{
            if(!value){
                callback(new Error("必填项"))
            }else
            callback()
        }
        return{
            rules:{
                creditCode:[
                    {validator:checkCreditCode,tigger:'blur'}
                ],
                name:[
                    {validator:checkName,tigger:'blur'}
                ],
                city:[
                    {validator:checkCity,tigger:'blur'}
                ],
                legalRepresentative:[
                    {validator:checkLegalRepresentative,tigger:'blur'}
                ]
            }
        }
    },
    methods:{
        check(){
            this.$refs.basicInfo.validate((valid)=>{
                if(valid){
                    this.$emit('checkOthers')
                }else{
                    this.$refs.msgDialog.confirm("填写信息有误，请填写完整后再提交")
                }
            })
            
        }
    },
    components:{
        msgDialog
    }
}
</script>
<style type="text/css">
.el-form--inline .el-form-item {
  margin-right: 20px;
}
</style>
