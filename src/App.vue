<template>
    <transition mode="out-in" name="fade">
        <component :is="layout">
            <transition mode="out-in" name="fade">
                <router-view></router-view>
            </transition>
        </component>
    </transition>
</template>

<script>
import VIndex from "@/layout/VIndex.vue";
import VLetter from "@/layout/VLetter.vue";
import "@/assets/plugins/index.js";

export default {
    data() {
        return {
            layout: this.$store.getters.meta,
        };
    },
    components: {
        VIndex,
        VLetter,
    },
    mounted() {
        window.addEventListener("resize", () => {
            const _this = this;

            _this.$store.commit(
                "setIsMobile",
                window.innerHeight > window.innerWidth
            );
        });

        window.oncontextmenu = () => false;
    },
    watch: {
        $route: function () {
            const _this = this;
            const $route = _this.$route;

            _this.layout = $route.meta.layout;
        },
        "$store.getters.meta": function () {
            const _this = this;

            _this.layout = _this.$store.getters.meta;
        },
    },
};
</script>


<style lang="scss">
@import "@/assets/scss/transition";
@import "@/assets/scss/normalize";
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
