<template>
	<div class="outline" @click.once="gameStart">
		<c-loading :isLoading="success"></c-loading>
		<div
			v-for="(item, index) in array"
			:key="index"
			class="cell"
			:style="{
				background: styleCalc(item.red, item.green, item.blue),
				width: width + '%',
				height: height + '%',
			}"
			:ref="index"
			@click="swapHandle(index)"
		></div>
	</div>
</template>

<script>
import CLoading from "../components/CLoading.vue";
export default {
	components: { CLoading },
	props: {
		level: {
			type: Object,
			default: {},
		},
	},
	data() {
		return {
			array: [],
			storeIndex: null,
			width: 0,
			height: 0,
			success: false,
			colorSet: ["red", "green", "blue"],
		};
	},
	created() {
		const _this = this;

		_this.calcSize();
		_this.init();
	},
	mounted() {
		const _this = this;

		_this.randomize();
	},
	methods: {
		gameStart() {},
		init() {
			const _this = this;
			let array = _this.array;
			const quantity = _this.row * _this.column;
			const colorSet = _this.colorSet;
			const colorBoundary = _this.colorInit();

			for (let index = 1; index < quantity + 1; index++) {
				let obj = {};

				colorSet.forEach((color) => {
					obj[color] =
						colorBoundary[`${color}Start`] +
						colorBoundary[`${color}Vector`] * index;
				});

				array.push(obj);
			}
		},
		randomize() {
			const _this = this;
			let time = 1;
			const times = 15;
			const array = _this.array;
			const arrayLength = array.length;

			while (time < times) {
				let current = Math.floor(Math.random() * arrayLength);

				_this.swapHandle(current);
				time++;
			}
		},
		styleCalc(red, green, blue) {
			return `rgba(${red}, ${green}, ${blue})`;
		},
		swapHandle(index) {
			const _this = this;
			const array = _this.array;
			const $refs = _this.$refs;
			const storeValue = Object.assign({}, array[_this.storeIndex]);
			const indexValue = Object.assign({}, array[index]);

			if (_this.storeIndex === null) {
				_this.storeIndex = index;
				$refs[_this.storeIndex][0].classList.toggle("selected");
			} else {
				if (_this.storeIndex !== index) {
					_this.$set(array, index, storeValue);
					_this.$set(array, _this.storeIndex, indexValue);
				}

				$refs[_this.storeIndex][0].classList.toggle("selected");
				_this.storeIndex = null;
			}
		},
		calcSize() {
			const _this = this;

			_this.column = _this.level["column"];
			_this.row = _this.level["row"];

			_this.width = 100 / _this.column;
			_this.height = 100 / _this.row;
		},
		colorInit() {
			const _this = this;
			const colorSet = _this.colorSet;
			const colorBoundary = new Object();
			const quantity = _this.row * _this.column;

			colorSet.forEach((color) => {
				let start = Math.floor(Math.random() * 256);
				let end = Math.floor(Math.random() * 256);

				colorBoundary[`${color}Start`] = start;
				colorBoundary[`${color}Vector`] = (end - start) / quantity;
			});

			return colorBoundary;
		},
	},
	watch: {
		array: {
			deep: true,
			handler() {
				const _this = this;
				const array = _this.array;
				const arrayLength = array.length;
				const colorSet = _this.colorSet;
				const $store = _this.$store;
				let bool = true;

				colorSet.forEach((color) => {
					const start = array[0][color];
					const end = array[arrayLength - 1][color];
					const coefficent = start < end ? 1 : -1; // true means 'ascendeing', false otherwise

					for (let index = 0; index < arrayLength - 1; index++) {
						const currentVal = coefficent * array[index][color];
						const rightVal = coefficent * array[index + 1][color];

						if (currentVal > rightVal) {
							bool = false;
							break;
						}
					}
				});

				if (bool) {
					_this.success = true;
					$store.commit("setDifficulty", _this.level.difficulty);

					setTimeout(() => {
						_this.success = false;
						_this.$router.push({ name: "Level" });
					}, 3000);
				}
			},
		},
	},
};
</script>

<style scoped lang='scss'>
.outline {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;

	.cell {
		@include inline-flex(center, center);
		box-sizing: border-box;
		transition: 0.6s all ease;
		vertical-align: top;
		border-radius: 5px;
		border: 1px solid $color-black;
		box-sizing: border-box;

		&:hover {
			cursor: pointer;
		}

		&.selected {
			transform: scale(0.9);
			border-radius: 10px;
		}
	}
}
</style>