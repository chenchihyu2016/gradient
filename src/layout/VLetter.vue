<template>
	<div class="background">
		<slot></slot>
	</div>
</template>

<script>
export default {};
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