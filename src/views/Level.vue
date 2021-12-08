<template>
    <div class="outline">
        <router-link
            :to="{ name: 'Gradient', params: { level: level } }"
            v-for="(level, index) in levels"
            class="box"
            :key="index"
            :class="{ passed: isPassed(level) }"
        >
            <p class="text">{{ level.row }} x {{ level.column }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            levels: {
                required: true,
                type: Array,
                default: () => [],
            },
        };
    },
    created() {
        const _this = this;
        const $store = _this.$store;

        _this.levels = $store.getters.getLevels;
    },
    methods: {
        isPassed: function (level) {
            const $store = this.$store;
            const passedLevels = $store.getters.getPassedLevels;

            return passedLevels.includes(level.difficulty);
        },
    },
};
</script>

<style scoped lang='scss'>
.outline {
    @include inline-flex(flex-start, flex-start);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 2px;

    .box {
        @include inline-flex(center, center);
        width: 25%;
        height: 50%;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 25px;
        border-radius: 10px;
        color: $color-black;

        &:hover {
            color: $color-white;
            background: $color-black;
        }
    }

    .passed {
        &:hover {
            color: $color-white;
            background: $color-yellow;
        }
    }
}
</style>