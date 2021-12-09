<template>
	<div class="curtain">
		<template v-for="content in contents">
			<div v-if="content.images.length > 0" class="item" :key="content.text">
				<div class="images">
					<img
						class="image"
						v-for="image in content.images"
						:key="image.index"
						:src="getImgUrl(image)"
					/>
				</div>
				<div class="text">{{ content.text }}</div>
			</div>
			<div v-else class="item" :key="content.text">
				<div class="text_only">{{ content.text }}</div>
			</div>
		</template>
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
					images: ["1-1"],
					text: `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been`,
				},
				{
					images: ["1-1", "1-1", "1-1"],
					text: `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been`,
				},
			],
		};
	},
	created() {
		const _this = this;

		// setTimeout(() => {
		// 	_this.sound.play();
		// }, 1000);
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
	@include flex(center, center);
	width: 100%;
	margin: auto;
	animation: slide-up 60s linear 0.5s 1 normal forwards;
	position: absolute;
	top: 20%;

	.item {
		@include inline-flex(center, center);
		flex-direction: column;
		height: 55vh;
		margin: 1% 0;
		width: 90%;
		backdrop-filter: blur(2px);
		background: #ffffff10;
		border-radius: 10px;

		@media screen and (min-width: 1023px) {
			flex-direction: row;
		}

		.images {
			@include inline-flex(space-between, center);
			flex: 7;
			height: 100%;
			overflow: hidden;
			flex-wrap: nowrap;
			border-bottom: 1px solid $color-white;

			@media screen and (min-width: 1023px) {
				border-bottom: none;
				border-right: 1px solid $color-white;
				flex-wrap: wrap;
			}

			.image {
				max-width: 95%;
				max-height: 95%;
				border-radius: 10px;
				transition: 0.5s all linear;
				overflow: hidden;
				border: 2px solid $color-blue;
				filter: brightness(1.05);
				cursor: pointer;

				@media screen and (min-width: 1023px) {
					max-width: 100%;
					max-height: 100%;
				}

				@media (hover: hover) {
					&:hover {
						transform: scale(1.05);
					}
				}
			}
		}

		.text {
			@include inline-flex(center, center);
			flex: 3;
			height: 100%;
			text-align: justify;
			margin: 0 20px;
			// background: $color-green;

			@media screen and (min-width: 1023px) {
				margin: 0 10px;
			}
		}

		.text_only {
			@include inline-flex(center, center);
			width: 90%;
			height: 100%;
			font-size: 24px;
			line-height: 30px;
			background-color: #ffffff10;
			backdrop-filter: blur(4px);
			border-radius: 10px;
			padding: 10px;
			text-align: justify;

			@media screen and (min-width: 1023px) {
				padding: 30px;
				width: 80%;
			}
		}
	}
}

@keyframes slide-up {
	100% {
		top: -150%;
	}
}
</style>