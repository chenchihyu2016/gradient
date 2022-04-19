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
        const _this = this;

        document.title = "Gradiently";

        window.oncontextmenu = () => false;

        window.addEventListener("resize", () => {
            const _this = this;

            _this.$store.commit(
                "setIsMobile",
                window.innerHeight > window.innerWidth
            );
        });

        _this.iphoneHandle();
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
    methods: {
        iphoneHandle() {
            let lastTouchEnd = 0;

            document.addEventListener(
                "touchstart",
                (event) => {
                    if (event.touches.length > 1) event.preventDefault();
                },
                { passive: false }
            );

            document.addEventListener(
                "touchend",
                (event) => {
                    const now = new Date().getTime();

                    if (now - lastTouchEnd <= 300) event.preventDefault();

                    lastTouchEnd = now;
                },
                false
            );

            if (
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i)
            ) {
                /* iOS hides Safari address bar */
                window.addEventListener("load", function () {
                    setTimeout(function () {
                        window.scrollTo(0, 1);
                    }, 1000);
                });
            }
        }
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
