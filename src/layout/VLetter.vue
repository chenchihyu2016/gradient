<template>
	<div
		class="background"
		@mousedown="calculating = true"
		@mouseup="calculating = false"
		@touchstart="calculating = true"
		@touchend="calculating = false"
	>
		<slot></slot>
		<CCircularPercentage
			title="輕觸離開"
			:timeToElapse="timeToElapse"
			:calculating="calculating"
			@reachFull="reachFull"
		/>
	</div>
</template>

<script>
import CCircularPercentage from "../components/CCircularPercentage.vue";
export default {
	components: { CCircularPercentage },
	data() {
		return {
			timeToElapse: 2,
			calculating: false,
		};
	},
	methods: {
		reachFull() {
			const _this = this;

			_this.$router.push({ name: "Level" });
		},
	},
};
</script>

<style scoped lang='scss'>
.background {
	@include flex(center, center);
	box-sizing: border-box;
	background: rgba($color-black, 0.85);
	width: 100%;
	height: 100vh;
	color: $color-white;
	position: relative;
	overflow: auto;
}
</style>