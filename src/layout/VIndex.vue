<template>
    <div
        class="main_wrapper"
        @touchstart="assignNewTouchEvent"
        @touchend="handleSwipe"
    >
        <CHeader />
        <CNavbar />
        <section class="index_section">
            <slot></slot>
        </section>
    </div>
</template>

<script>
import TouchEvent from "@/assets/js/touch";

export default {
    data() {
        return {
            touchEvent: null,
        };
    },
    methods: {
        assignNewTouchEvent(event) {
            this.touchEvent = new TouchEvent(event);
        },
        handleSwipe(event) {
            const $store = this.$store;

            if (!this.touchEvent) return;

            this.touchEvent.setEndEvent(event);

            if (this.touchEvent.isSwipeRight())
                $store.commit("setIsNavOpen", true);
            else if (this.touchEvent.isSwipeLeft())
                $store.commit("setIsNavOpen", false);

            this.touchEvent = null;
        },
    },
};
</script>


<style scoped lang="scss">
.main_wrapper {
    @include flex(center, center);
    position: relative;
    height: 100vh;
    width: 100%;

    .index_section {
        @include inline-flex(center, center);
        width: 100%;
        height: 92vh;
        position: relative;
    }
}
</style>