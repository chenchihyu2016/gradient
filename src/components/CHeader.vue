<template>
	<div class="header">
		<div
			class="menuToggler"
			v-if="!isMobile && !isNavOpen && isGradient"
			@click="handleNav"
		>
			+
		</div>
		<transition mode="out-in" name="fade" appear>
			<router-link v-if="showUnlock" :to="{ name: 'Letter' }" class="unlock">
				解鎖</router-link
			>
		</transition>
	</div>
</template>

<script>
export default {
	computed: {
		showUnlock() {
			const _this = this;
			const $store = _this.$store;

			return true;

			return (
				$store.getters.getPassedLevels.length ===
				$store.getters.getLevels.length
			);
		},
		isMobile() {
			return this.$store.getters.isMobile;
		},
		isNavOpen() {
			return this.$store.getters.isNavOpen;
		},
		isGradient() {
			return this.$route.name === "Gradient";
		},
	},
	methods: {
		handleNav() {
			const _this = this;
			const toggle = !_this.isNavOpen;

			_this.$store.commit("setIsNavOpen", toggle);
		},
	},
};
</script>

<style lang='scss' scoped>
.header {
	@include flex(center, center);
	width: 100%;
	height: 8vh;
	border-bottom: 2px solid $color-gray;
	box-sizing: border-box;
	position: relative;

	.menuToggler {
		@include flex(center, center);
		cursor: pointer;
		position: absolute;
		width: 50px;
		left: 0;
		top: 0;
		bottom: 0;

		&:hover {
			background: rgba($color-black, 0.3);
			color: $color-white;
		}
	}

	.unlock {
		@include flex(center, center);
		font-size: 25px;
		width: 16%;
		height: 80%;
		cursor: pointer;
		color: $color-black;
		transition: 0.15s linear all;
		border-radius: 10px;

		&:hover {
			color: rgba($color-gold, 0.5);
			// border: rgba($color-gold, 0.5) 2px solid;
		}
	}
}
</style>