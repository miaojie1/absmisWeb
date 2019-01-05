<template>
	<div>
		<el-tabs v-model="activeName2" type="card">
		    <el-tab-pane label="设计单位" name="designTraditionalInfoCheck">
		    	<design-traditional-info-check></design-traditional-info-check>
		    </el-tab-pane>

		    <el-tab-pane label="房地产企业" name="estateTraditionalInfoCheck">
		    	<estate-traditional-info-check></estate-traditional-info-check>
		    </el-tab-pane>

		    <el-tab-pane label="施工单位" name="buildTraditionalInfoCheck">
		    	<build-traditional-info-check></build-traditional-info-check>
		    </el-tab-pane>
	    </el-tabs>
	  </div>
</template>

<script>
import designTraditionalInfoCheck from './designTraditionalInfoCheck'
import estateTraditionalInfoCheck from './estateTraditionalInfoCheck'
import buildTraditionalInfoCheck from './buildTraditionalInfoCheck'
	export default{
		components:{
			designTraditionalInfoCheck,
			estateTraditionalInfoCheck,
			buildTraditionalInfoCheck
		}
	}
</script>
