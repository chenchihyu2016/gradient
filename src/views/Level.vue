<template>
    <div class="outline">
        <router-link
            :to="{ name: 'Gradient', params: { level: level } }"
            v-for="(level, index) in levels"
            class="box"
            :key="index"
            :class="{ passed: isPassed(level) }"
            :data-is-passed="!!isPassed(level)"
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
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
    },
    methods: {
        isPassed(level) {
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
        width: 100%;
        height: 8%;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 25px;
        border-radius: 10px;
        color: $color-black;
        margin-top: 2px;

        @media screen and (min-width: 1023px) {
            margin-top: 0;
            width: 20%;
            height: 50%;
        }

        @media (hover: hover) {
            &:not([data-is-passed="true"]):hover {
                color: $color-white;
                background: $color-black;
            }
        }
    }

    .passed {
        color: $color-white;
        background: $color-yellow;
    }
}
</style>