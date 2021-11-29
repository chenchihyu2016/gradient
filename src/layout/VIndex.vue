<template>
	<div class="main_wrapper">
		<CHeader />
		<section class="index_section">
			<slot></slot>
		</section>
	</div>
</template>

<style scoped lang="scss">
.main_wrapper {
	@include flex(center, center);
	position: relative;
	height: 100vh;
	width: 100%;

	.index_section {
		@include inline-flex(center, center);
		width: 90%;
		height: 85vh;
		position: relative;
	}
}
</style>