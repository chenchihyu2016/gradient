<template>
    <div class="outline" @click.once="gameStart">
        <c-loading :isLoading="success" />
        <div
            v-for="(rowNumber, index) in row"
            :key="index"
            class="row"
            :style="{ height: rowHeight + '%', width: rowWidth + '%' }"
        >
            <div
                v-for="(columnNumber, indice) in column"
                class="column"
                :key="indice"
                :ref="getIndex(rowNumber, column, columnNumber)"
                @click="swapHandle(getIndex(rowNumber, column, columnNumber))"
                :style="{
                    background: styleCalc(
                        getIndex(rowNumber, column, columnNumber)
                    ),
                    height: columnHeight + '%',
                    width: columnWidth + '%',
                }"
            ></div>
        </div>
    </div>
</template>

<script>
import CLoading from "../components/CLoading.vue";
export default {
    components: { CLoading },
    props: {
        level: {
            type: Object,
            default: () => {
                return {
                    row: 2,
                    column: 5,
                };
            },
        },
    },
    data() {
        return {
            array: [],
            storeIndex: null,
            success: false,
            colorSet: ["red", "green", "blue"],
            rowHeight: null,
            rowWidth: null,
            columnHeight: null,
            columnWidth: null,
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
            const array = _this.array;
            const quantity = _this.row * _this.column;
            const colorSet = _this.colorSet;
            const colorBoundary = _this.colorInit();

            for (let index = 1; index < quantity + 1; index++) {
                const obj = {};

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
            const times = 21;
            const array = _this.array;
            const arrayLength = array.length;

            while (time < times) {
                const current = Math.floor(Math.random() * arrayLength);

                _this.swapHandle(current);
                time++;
            }
        },
        styleCalc(index) {
            const data = this.array[index];
            const { red, green, blue } = data;

            return `rgba(${red}, ${green}, ${blue})`;
        },
        getIndex(rowNumber, column, columnNumber) {
            return (rowNumber - 1) * column + (columnNumber - 1);
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
            const isMobile = _this.$store.getters.isMobile;

            _this.column = _this.level["column"];
            _this.row = _this.level["row"];

            if (!isMobile) {
                _this.rowWidth = 100;
                _this.columnHeight = 100;
            } else {
                _this.rowHeight = 100;
                _this.columnWidth = 100;
            }
        },
        colorInit() {
            const _this = this;
            const colorSet = _this.colorSet;
            const colorBoundary = {};
            const quantity = _this.row * _this.column;

            colorSet.forEach((color) => {
                const start = Math.floor(Math.random() * 256);
                const end = Math.floor(Math.random() * 256);

                colorBoundary[`${color}Start`] = start;
                colorBoundary[`${color}Vector`] = (end - start) / quantity;
            });

            return colorBoundary;
        },
    },
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
    },
    watch: {
        isMobile() {
            const _this = this;

            _this.calcSize();
        },
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
                    setTimeout(() => {
                        _this.success = true;
                        $store.commit("setDifficulty", _this.level.difficulty);
                    }, 500);

                    setTimeout(() => {
                        _this.success = false;
                        _this.$router.push({ name: "Level" });
                    }, 2000);
                }
            },
        },
    },
};
</script>

<style scoped lang='scss'>
.outline {
    @include flex(center, center);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    flex-direction: row;

    @media screen and (min-width: 1023px) {
        flex-direction: column;
    }

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
    }

    .row {
        @include flex(center, center);
        flex-direction: row;
        flex: 1;

        @media screen and (max-width: 1023px) {
            flex-direction: column;
        }

        .column {
            flex: 1;
            box-sizing: border-box;
            transition: 0.6s all ease;
            vertical-align: top;
            border-radius: 5px;
            border: 1px solid $color-white;
            box-sizing: border-box;
            cursor: pointer;
        }

        .selected {
            transform: scale(0.9);
            border-radius: 10px;
        }
    }
}
</style>