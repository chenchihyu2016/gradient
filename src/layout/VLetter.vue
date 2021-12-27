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
            :isLetterFinished="isLetterFinished"
            @reachFull="reachFull"
        />
    </div>
</template>

<script>
import CCircularPercentage from "../components/CCircularPercentage.vue";
export default {
    components: { CCircularPercentage },
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
    },
    data() {
        return {
            timeToElapse: this.isMobile ? 2 : 3,
            calculating: false,
            isLetterFinished: false,
        };
    },
    mounted() {
        const _this = this;

        setTimeout(() => {
            _this.isLetterFinished = true;
        }, 220000);
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
    overflow: hidden;
}
</style>