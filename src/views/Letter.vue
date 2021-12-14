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
			<div v-else class="item text_only" :key="content.text">
				{{ content.text }}
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
				{
					images: [],
					text: `單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試單行測試`,
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
	// animation: slide-up 60s linear 0.5s 1 normal forwards;
	position: absolute;
	top: 10%;

	.item {
		@include inline-flex(center, center);
		flex-direction: column;
		height: 55vh;
		margin: 1% 0;
		width: 90%;
		backdrop-filter: blur(2px);
		background: #ffffff10;
		border-radius: 10px;
		padding: 0 10px;

		@media screen and (min-width: 1023px) {
			flex-direction: row;
		}

		.images {
			@include inline-flex(space-between, center);
			flex: 8;
			height: 100%;
			overflow: hidden;
			flex-wrap: nowrap;

			@media screen and (min-width: 1023px) {
				border-bottom: none;
				flex-wrap: wrap;
				padding-left: 0;
				flex: 7;
			}

			.image {
				max-width: 95%;
				max-height: 95%;
				height: 95%;
				border-radius: 5px;
				transition: 0.5s all linear;
				overflow: hidden;
				border: 2px solid $color-blue;
				cursor: pointer;

				@media screen and (min-width: 1023px) {
					max-width: 95%;
					max-height: 95%;
				}

				@media (hover: hover) {
					&:hover {
						filter: brightness(1.05);
					}
				}
			}
		}

		.text {
			@include inline-flex(center, center);
			flex: 2;
			text-align: justify;
			margin: 0 20px;
			border-top: 1px solid $color-white;
			padding: 0 10px;

			@media screen and (min-width: 1023px) {
				flex: 3;
				height: 80%;
				border-top: none;
				border-left: 1px solid $color-white;
				margin: 0 0 0 10px;
				padding-right: 0;

				&:nth-child(2n) {
					order: 1;
				}
			}
		}
	}

	.text_only {
		@include inline-flex(center, center);
		height: 100%;
		line-height: 30px;
		background-color: #ffffff10;
		border-radius: 10px;
		text-align: justify;
		padding: 20px 10px;
	}
}

@keyframes slide-up {
	100% {
		top: -150%;
	}
}
</style>