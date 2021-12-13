<template>
	<transition name="slide-fade" mode="out-in">
		<div class="nav_background" v-if="isNavOpen">
			<div class="left_nav">
				<div class="close_icon" @click="closeNav">&times;</div>
				<div class="item" @click="backToLevel" v-if="showBackToLevel">
					<b-icon icon="arrow-bar-left" class="icon"></b-icon>
					<span class="text">返回關卡頁</span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			showBackToLevel: false,
		};
	},
	computed: {
		isNavOpen() {
			return this.$store.getters.isNavOpen;
		},
	},
	watch: {
		"$route.name": function () {
			this.showBackToLevel = this.$route.name === "Gradient";
		},
	},
	methods: {
		backToLevel() {
			this.$router.push({ name: "Level" });

			this.$store.commit("setIsNavOpen", false);
		},
		closeNav() {
			this.$store.commit("setIsNavOpen", false);
		},
	},
};
</script>

<style scoped lang='scss'>
.nav_background {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: transparent;
	z-index: 999;
	backdrop-filter: blur(2px);

	.left_nav {
		@include flex(flex-end, flex-start);
		position: relative;
		flex-direction: column;
		color: $color-white;
		background: rgba($color-black, 0.3);
		width: 70%;
		height: 100%;
		font-size: 24px;

		@media screen and (min-width: 1023px) {
			width: 20%;
		}

		.close_icon {
			@include flex(center, center);
			position: absolute;
			top: 0;
			right: 0;
			width: 30px;
			height: 30px;
			color: $color-white;
			cursor: pointer;
			display: none;

			@media screen and (min-width: 1023px) {
				display: flex;
			}
		}

		.item {
			@include flex(flex-start, center);
			width: 100%;
			border-bottom: 1px solid $color-white;
			cursor: pointer;

			&:hover {
				color: $color-black;
			}

			&:last-child {
				border-bottom: none;
			}

			.icon {
				@include inline-flex(center, center);
				height: 100%;
				padding: 0 20px;
			}

			.text {
				display: inline-flex;
				padding: 10px 0;
			}
		}
	}
}
</style>