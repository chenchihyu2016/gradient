<template>
	<div class="curtain">
		<template v-for="content in contents">
			<div v-if="content.images.length > 0" class="item" :key="content.text">
				<div class="images">
					<template v-for="image in content.images">
						<img class="image" :key="image.index" :src="getImgUrl(image)" />
					</template>
				</div>
				<div class="text">{{ content.text }}</div>
			</div>
			<div v-else class="item" :key="content.text">
				<div class="text_only">{{ content.text }}</div>
			</div>
		</template>
		<div class="return" @click="backToLevel">返回關卡頁</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sound: new Audio(require("@/assets/music/soundtrack.mp3")),
			contents: [
				// { images: ['1-1', '1-2'], text: '所以暫時將你眼睛閉了起來' },
				// { images: ['1-1'], text: '所以暫時將你眼睛閉了起來' },

				{
					images: [],
					text: `\n
              致波波~~\n
              \n
              還記得今年年初在宿舍一起打電動時，\n
              我那時說我也寫得出 Gradiently 這款遊戲嗎?~~~\n
              \n
              有些話還是不要說得太早好了.....\n
              \n
              疫情的這段時間讓我們少了許多時間見面和出遊\n
              讓我多了些時間可以多看些學習資源和練習的機會\n
              想起那時你盯著電視玩這款遊戲的神情(挺認真的呢~)\n
              就開始著手於這份小型專案啦~~\n

              防疫時間長得有時讓我感到異常煩悶\n
              還真的是希望未來都不會這麼久無法見面呢(苦笑\n
              但辛苦歸辛苦\n
              別忘記我也不會在這種時候下放手，好嗎?\n
              那時在鏡頭的另一頭眼角泛淚太令人不捨了啦\n
              我們等疫情好些時再補上這段時間的空缺吧~~\n

              最後\n
              希望你有享受到這遊戲~~~\n
              \n
              志宇\n
              \n
              `,
				},
				{ images: ["1-2"] },
			],
		};
	},
	created() {
		const _this = this;

		setTimeout(() => {
			_this.sound.play();
		}, 1000);
	},
	methods: {
		backToLevel() {
			const $router = this.$router;

			$router.push({ name: "Level" });
		},
		getImgUrl(pic) {
			return require(`@/assets/images/${pic}.jpg`);
		},
	},
	beforeDestroy() {
		const _this = this;

		_this.sound.pause();
		_this.sound.currentTime = 0;
	},
};
</script>

<style scoped lang='scss'>
.curtain {
	width: 95%;
	margin: 0 2.5%;
	height: 650%;
	animation: slide-up 60s linear 0.5s 1 normal forwards;
	position: absolute;
	top: 100%;

	.item {
		@include inline-flex(center, center);
		width: 100%;
		min-height: 55vh;
		margin: 1% 0;

		.images {
			@include inline-flex(space-between, center);
			width: 70%;
			height: 100%;
			vertical-align: top;

			.image {
				height: 100%;
				width: 30%;
				border-radius: 10px;
				transition: 0.5s all linear;
				overflow: hidden;
			}
		}

		.text {
			@include inline-flex(center, center);
			width: 30%;
			height: 100%;
			white-space: pre;
			line-height: 5px;
		}

		.text_only {
			@include inline-flex(center, center);
			width: 60%;
			height: 100%;
			white-space: pre;
			font-size: 24px;
			line-height: 30px;
			background-color: #ffffff10;
			backdrop-filter: blur(4px);
			border-radius: 10px;
		}
	}

	.return {
		font-size: 24px;
		text-align: center;
		transition: 0.3s all ease;
		cursor: pointer;

		&:hover {
			color: $color-gold;
		}
	}
}

@keyframes slide-up {
	100% {
		top: -150%;
	}
}
</style>