<template>
	<div class="index flexcenter">
		<div class="muteds">
			<i class="iconfont icon-shengyinjingyin" v-if="muted==true" @click="handleTimeUpdate"/>
			<i class="iconfont icon-shengyin" v-else @click="handleTimeUpdates"/>
		</div>
		<img src="../assets/title.png" alt="" />
		<div class="video-container">
			<video ref="videoPlayer" autoplay="autoplay" :controls="showControls"  muted loop
				:src="currentVideo" @ended="handleVideoEnded" class="video"></video>
		</div>
	<!-- 	<video ref="videoPlayer" autoplay="autoplay" :controls="showControls" muted  loop
			:src="currentVideo" @ended="handleVideoEnded" class="videos" ></video> -->
	</div>
	<div class="poster flexcenter">
		<img class="posterImg" :src="posterImg" alt="" align="center"/>
		<img class="posterImgs" :src="posterImg" alt="" align="center"/>
		<div class="posters">
			<img v-for="(item,index) in posters"  :src="item.img" :class="item.state?'postersImg':'postersImgs'" alt="" align="center"  @mouseenter="postersenter(item)" @click="postersClick(item)"/>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		computed,
		onMounted
	} from 'vue';

	const videos = ref([
		'https://juneyours.s3.amazonaws.com/WeChat_20240426101226.mp4' , // 替换为你的视频路径  
		// 'https://juneyours.s3.amazonaws.com/video4.mp4' // 替换为你的视频路径  
	]);
	const posterImg = ref([
		'https://juneyours.s3.amazonaws.com/poster1.png' , // 替换为你的视频路径  
		// 'https://juneyours.s3.amazonaws.com/video4.mp4' // 替换为你的视频路径  
	]);
	const posters = ref([{
		img:"https://juneyours.s3.amazonaws.com/poster1.png",state:true,id:1
	},{
		img:"https://juneyours.s3.amazonaws.com/poster2.png",state:false,id:2
	},{
		img:"https://juneyours.s3.amazonaws.com/848ca6c010776f92540a5eee2c05344.png",state:false,id:3
	}
	]);
	 const videoPlayer = ref(null); 
	const currentIndex = ref(0);
	const showControls = ref(false);
	const muted = ref(true);
	// 计算属性，返回当前要播放的视频的src  
	const currentVideo = computed(() => {
		return videos.value[currentIndex.value];
	});
	// 处理视频播放结束的事件  
	const handleVideoEnded = () => {
		muted.value=false
		currentIndex.value = (currentIndex.value + 1) % videos.value.length;
		// 如果需要，可以在这里重新加载视频或进行其他操作  
	}
	const handleTimeUpdate = () => {
		muted.value=false
		videoPlayer.value.muted = false;
	}
	const handleTimeUpdates = () => {
		muted.value=true
		videoPlayer.value.muted = true;
	}
	// class add=1
	
	const postersenter=(item)=>{
		posters.value.forEach((res)=>{
			if(res.id==item.id){
				res.state=true
			}else{
				res.state=false
			}
		})
	}
	const postersClick=(item)=>{
		posterImg.value=item.img
	}
	// 生命周期钩子，可以在这里进行初始化操作，例如检查浏览器是否支持视频播放等  
	onMounted(() => {
		// 初始化代码（如果有的话）  
		// handleTimeUpdate()
		console.log(123)
	});
</script>

<style scoped lang="scss">
	/* 你的样式 */
	.index{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}
	.video-container{
		width: 100%;
		height: 100%;
		object-fit: cover; /* 确保视频覆盖整个容器 */
		// filter: blur(50px); /* 应用模糊效果，调整模糊半径 */  
		position: absolute;
		// top: -800px;
		z-index: -1;
	}
	.video{
		width: 100%;
	}
	.videos{
		width: 100%;
	}
	.muteds{
		position: absolute;
		top:40px;
		right:100px;
		z-index:10;
		i{
			font-size: 30px;
		}
	}
	.poster{
		width: 100%;
		height:100vh;
		position: relative;
		.posterImg{
			width: 100%;
			height: 100%;
			object-fit: cover;
			filter: blur(30px);
			z-index: -1;
		}
		.posterImgs{
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			z-index: 1;
		}
		.posters{
			width:100%;
			height:35vh;
			position: absolute;
			bottom:20px;
			left: 0;
			z-index: 2;
			text-align: right;
			.postersImg{
				height: 100%;
				margin-right:30px
			}
			.postersImgs{
				height: 93%;
				margin-right:30px
			}
		}
	}
</style>
