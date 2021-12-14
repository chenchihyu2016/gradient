<template>
    <transition name="fade" mode="out-in">
        <div
            class="stop_sign"
            :class="{ calculating }"
            v-if="calculating && value >= 15"
        >
            <p class="title">{{ title }}</p>
            <svg viewBox="0 0 36 36" class="circular_percentage">
                <path
                    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#ffffff"
                    stroke-opacity="80%"
                    stroke-width="3"
                    :stroke-dasharray="strokeDasharray"
                />
            </svg>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        title: {
            default: "",
            type: String,
        },
        timeToElapse: {
            default: 2,
            type: Number,
        },
        calculating: {
            default: false,
            type: Boolean,
        },
    },
    data() {
        return {
            value: 0,
            timeId: 0,
            timeElapsed: 0,
            coefficent: 40,
        };
    },
    watch: {
        value() {
            const _this = this;

            if (_this.value > 100) {
                clearInterval(_this.timeId);
                _this.$emit("reachFull");
            }
        },
        calculating() {
            const _this = this;

            _this.calculating ? _this.startCal() : _this.endCal();
        },
    },
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
        strokeDasharray() {
            return `${this.value}, 100`;
        },
    },
    methods: {
        startCal() {
            const _this = this;
            const coefficient = _this.coefficent;
            const timeToElapse = _this.timeToElapse;
            const timeElapseUnit = timeToElapse / coefficient;
            const valueUnit = 100 / coefficient;
            const timeUnit = (timeToElapse * 1000) / coefficient;

            _this.timeId = setInterval(() => {
                _this.timeElapsed += timeElapseUnit;
                _this.value += valueUnit;
            }, timeUnit);
        },
        endCal() {
            const _this = this;

            _this.timeElapsed = 0;
            _this.value = 0;
            clearInterval(_this.timeId);
        },
    },
};
</script>

<style scoped lang='scss'>
.stop_sign {
    @include flex(center, center);
    z-index: 5;
    position: fixed;
    bottom: 2%;
    right: 5%;
    color: rgba($color-white, 0.2);
    background: rgba($color-black, 0.2);
    padding: 10px 15px;
    border-radius: 10px;
    transition: 0.5s ease all;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        color: rgba($color-white, 0.8);
        background: rgba($color-black, 0.5);
    }

    .title {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
    }

    .circular_percentage {
        width: 36px;
        height: 36px;
    }
}

.calculating {
    color: rgba($color-white, 0.8);
    background: rgba($color-black, 0.8);
}
</style>