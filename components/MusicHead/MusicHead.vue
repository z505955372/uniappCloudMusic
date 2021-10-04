<template>
	<view class="music-head">
		<view  v-if="icon" class="music-head-icon">
			<text class="iconfont icon-zuosanjiao" @tap="handleToBack"></text>| <text class="iconfont icon-shouye" @tap="handleToHome"></text>
		</view>
{{title}}
	</view>
</template>

<script>
	export default {
		name:"MusicHead",
		data() {
			return {
				
			};
		},
		methods:{
			handleToBack(){
				//返回到上一页的方法
					uni.navigateBack({
						
					})
				
			},
			handleToHome(){
				// 返回到主页的方法
				uni.navigateTo({
					url:'/pages/index/index'
				});
			}
			
		},
		
		props:['title','icon']
	}
</script>

<style scoped>
.music-head{
	width: 100%;
	height: 75px;
	font-size: 16px;
	line-height: 80px;
	text-align: center;
	color: black;
	position: relative;
	
}
.music-head-icon{
	position: absolute;
	left: 8px;
	top: 26px;
	width: 90px;
	height: 30px;
	background-color: rgba(0,0,0,0.4);
	color: white;
	line-height: 31px;
	border-radius: 15px;
	display: flex;
	justify-content: space-evenly;
	
}

</style>
