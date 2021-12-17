<template>
	<div
		class="background"
		@mousedown="startCalculating"
		@mouseup="stopCalculating"
		@touchstart="startCalculating"
		@touchend="stopCalculating"
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
		startCalculating(event) {
			const _this = this;
			const which = event.which;

			if (which === 2 || which === 3) return;

			_this.calculating = true;
		},
		stopCalculating() {
			const _this = this;

			_this.calculating = false;
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
	// overflow: hidden;
	overflow: auto;
}
</style>