<template>
	<div class="curtain">
		<template v-for="(content, index) in contents">
			<div v-if="content.images.length > 0" class="item" :key="index">
				<div class="images">
					<div class="image">
						<div class="number_of_images" v-if="isMobile">
							{{ content.images.length }} 張
						</div>
						<img
							class="img"
							v-for="image in content.images"
							:key="image.index"
							:src="getImgUrl(image)"
						/>
					</div>
				</div>
				<div class="text">{{ content.text }}</div>
			</div>
			<div v-else class="item text_only" :key="index">
				<div class="inner_text">{{ content.text }}</div>
			</div>
		</template>
	</div>
</template>

<script>
import config from "@/../public/config.json";
export default {
	data() {
		return {
			sound: new Audio(require("@/assets/music/soundtrack.mp3")),
			contents: config.contents,
		};
	},
	created() {
		const _this = this;

		// setTimeout(() => {
		// 	_this.sound.play();
		// }, 1000);
	},
	computed: {
		isMobile() {
			return this.$store.getters.isMobile;
		},
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
	top: 5%;

	.item {
		@include inline-flex(center, center);
		flex-direction: column;
		height: 55vh;
		margin: 2% 0;
		width: 80%;
		backdrop-filter: blur(2px);
		background: #ffffff10;
		border-radius: 10px;
		padding: 10px;

		@media screen and (min-width: 1023px) {
			width: 90%;
			flex-direction: row;
			margin: 1% 0;
		}

		.images {
			@include inline-flex(center, center);
			position: relative;
			flex: 8;
			height: 100%;
			width: 100%;
			overflow: auto;

			&::-webkit-scrollbar {
				display: none;
			}

			@media screen and (min-width: 1023px) {
				border-bottom: none;
				flex-wrap: wrap;
				padding-left: 0;
				flex: 7;
			}

			.number_of_images {
				position: absolute;
				bottom: 2.5%;
				right: 20%;
				color: $color-white;
				background: rgba($color-black, 0.5);
				padding: 10px;

				@media screen and (min-width: 1023px) {
					right: 2%;
				}
			}

			.image {
				@include inline-flex(center, center);
				flex-direction: column;
				flex-wrap: wrap;
				width: 60%;
				height: 95%;
				overflow: auto;
				border: 2px solid $color-red;

				&::-webkit-scrollbar {
					display: none;
				}

				@media screen and (min-width: 1023px) {
					width: 90%;
				}

				.img {
					max-width: 100%;
					max-height: 100%;
					height: 100%;
					margin-right: 5%;
					border-radius: 5px;

					&:last-child {
						margin-right: 0;
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
			line-height: 18px;

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
		line-height: 24px;
		background-color: #ffffff10;
		border-radius: 10px;
		text-align: justify;

		.inner_text {
			margin: 0 20px;
			padding: 0 10px;
		}
	}
}

@keyframes slide-up {
	100% {
		top: -250%;
	}
}
</style>