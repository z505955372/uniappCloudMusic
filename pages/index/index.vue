<template>
	<view class="index">
		<musichead title="网易云音乐" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
			
				<view class="index-search"@tap="handleToSeach()">
					<text class="iconfont  icon-Magnifier"></text>
					<input type="text" placeholder="搜索歌曲" />

				</view>

				<!-- 	<view class="index-list">
							<view class="index-list-item">
								<view class="index-list-img">
									<image src="../../static/bg.jpg" mode=""></image>
									<text>每天更新</text>
								</view>
								<view class="index-list-text">
									<view>1.晴天 - 周杰伦</view>
									<view>1.晴天 - 周杰伦</view>
									<view>1.晴天 - 周杰伦</view>
									
								</view>
							</view>
						</view>
						 -->
						 <view  v-if="isLoading">
						 	
						
						 <m-for-skeleton
						         :avatarSize="200"
						         :row="3"
						         :loading="isLoading"
						         isarc="square"
						         v-for="(item,key) in 4"
								:titleStyle="{}"
								:title="false"
						         :key="key">
						       
						         </m-for-skeleton>
						  </view>
				<view class="index-list" v-else>
					<view class="index-list-item" v-for="(item,index) in topList" :key='index'
						@tap="handleToList(item.listId)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(item,index) in item.tracks" :key='index'>{{index+1}}.{{item.first}} -
								{{item.second}}
							</view>



						</view>
					</view>
				</view>


			</scroll-view>

		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css';
	import musichead from '@/components/MusicHead/MusicHead.vue';
	import mForSkeleton from "@/components/m-for-skeleton/m-for-skeleton";
	import {
		topList
	} from '../../common/api.js'
	export default {
		data() {
			return {
				topList: [],
				isLoading: true
			}
		},
		components: {
			musichead,
			  mForSkeleton
		},
		onLoad() {
			topList().then((res) => {
				if (res.length) {
					setTimeout(()=>{
					this.isLoading=false
					this.topList = res;
					},1000)
					
				}

			});
		},
		methods: {
			handleToList(listId) {
				uni.navigateTo({
					url: '/pages/list/list?id=' + listId
				});
			},
			handleToSeach(){
				uni.navigateTo({
					url: '/pages/seach/seach'
				});
			},
			 hide() {
			      this.isLoading = false;
			    }
		}
	}
</script>

<style scoped>
	.index {}

	.index-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;


	}

	.index-search text {
		font-size: 26rpx;
		margin-right: 26rpx;
		margin-left: 28rpx;

	}

	.index-search input {
		font-size: 28rpx;
		flex: 1;

	}



	.index-list {
		margin: 0 30rpx;

	}

	.index-list-item {
		display: flex;

		margin-bottom: 35rpx;

	}

	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 15rpx;
		overflow: hidden;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;

	}

	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: white;
		font-size: 20rpx;


	}

	.index-list-text {
		font-size: 24rpx;
		line-height: 68rpx;
		flex: 1;
		/* 留个小记号 */
		/* 当字体超出弹性盒子时图片会变形 */
	}

	.index-list-text view {
		width: 60vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
