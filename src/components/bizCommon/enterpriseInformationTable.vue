<template>
  <el-table
    :data="enterpriseTableData"
    border
    stripe
    tooltip-effect="dark"
    style="width:100%"
    highlight-current-row
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55"
      >
    </el-table-column>
    <el-table-column
      label="企业名称"
      align="center"
      prop="name"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      label="用户名"
      align="center"
      prop="username"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>
<script>
  export default{
    data(){
      return{
        selectedRows:[],
      }
    },
    props:['enterpriseTableData'],
    methods:{
      handleSelectionChange(selectedRows){
        this.selectedRows = selectedRows
        this.$emit('handleSelectionChange',this.selectedRows)
      }
    }
  }
</script>
