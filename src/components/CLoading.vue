<template>
	<transition name="fade" mode="out-in">
		<div class="backdrop" v-if="isLoading">
			<div class="success_icon"></div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			default: true,
		},
	},
};
</script>

<style lang='scss' scoped>
.backdrop {
	@include flex(center, center);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	backdrop-filter: blur(2px);

	.success_icon {
		background: rgba($color-white, 0.5);
		width: 50px;
		height: 50px;
		border-radius: 10px;
		animation: flip 1s ease infinite;
	}
}

@keyframes flip {
	50% {
		transform: rotateX(180deg);
	}

	100% {
		transform: rotateX(180deg) rotateY(180deg);
	}
}
</style>