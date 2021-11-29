<template>
	<div class="header">
		<transition mode="out-in" name="fade" appear>
			<router-link v-if="isShow" :to="{ name: 'Letter' }" class="unlock">
				解鎖</router-link
			>
		</transition>
	</div>
</template>

<script>
export default {
	computed: {
		isShow: function () {
			const _this = this;
			const $store = _this.$store;

			return true;

			return (
				$store.getters.getPassedLevels.length ===
				$store.getters.getLevels.length
			);
		},
	},
};
</script>

<style lang='scss' scoped>
.header {
	@include flex(center, center);
	width: 100%;
	height: 15vh;
	border-bottom: 2px solid $color-gray;
	box-sizing: border-box;

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