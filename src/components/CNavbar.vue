<template>
    <transition name="slide-fade" mode="out-in">
        <div class="nav_background" v-if="isNavOpen" @click="closeNav">
            <div class="left_nav">
                <div class="close_icon" @click="closeNav">&#10006;</div>
                <div class="description">
                    <p>{{ description }}</p>
                    <p v-if="showHiddenDescription" class="hidden_description">
                        {{ hiddenDescription }}
                    </p>
                </div>
                <div class="item" @click="backToLevel" v-if="showBackToLevel">
                    <b-icon icon="arrow-bar-left" class="icon"></b-icon>
                    <span class="text">返回關卡頁</span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import Config from "@/../public/config.json";
export default {
    data() {
        return {
            showBackToLevel: false,
            description: Config.description,
            hiddenDescription: Config.hiddenDescription,
        };
    },
    computed: {
        isNavOpen() {
            return this.$store.getters.isNavOpen;
            // return true;
        },
        showHiddenDescription() {
            const _this = this;
            const $store = _this.$store;

            return true;

            return (
                $store.getters.getPassedLevels.length ===
                $store.getters.getLevels.length
            );
        },
    },
    watch: {
        "$route.name": function () {
            this.showBackToLevel = this.$route.name === "Gradient";
        },
    },
    methods: {
        backToLevel() {
            this.$router.push({ name: "Level" });

            this.$store.commit("setIsNavOpen", false);
        },
        closeNav() {
            this.$store.commit("setIsNavOpen", false);
        },
    },
};
</script>

<style scoped lang='scss'>
.nav_background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: -50%;
    background: transparent;
    z-index: 999;
    backdrop-filter: blur(2px);

    .left_nav {
        @include flex(flex-end, flex-start);
        position: relative;
        flex-direction: column;
        color: $color-white;
        background: rgba($color-black, 0.3);
        width: 60vw;
        height: 100%;
        font-size: 24px;
        padding: 0 20px;

        @media screen and (min-width: 1023px) {
            width: 20vw;
        }

        .close_icon {
            @include flex(center, center);
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 50px;
            color: $color-white;
            cursor: pointer;
            display: none;

            @media screen and (min-width: 1023px) {
                display: flex;
            }
        }

        .description {
            position: absolute;
            top: 50px;
            left: 20px;
            right: 20px;
            font-size: 20px;
            line-height: 30px;
            text-align: justify;

            @media screen and (min-width: 1023px) {
                font-size: 24px;
                line-height: 30px;
            }

            .hidden_description {
                margin-top: 20px;
                font-size: 16px;
                line-height: 24px;
                opacity: 0.8;
            }
        }

        .item {
            @include flex(flex-start, center);
            width: 100%;
            border-bottom: 1px solid $color-white;
            cursor: pointer;

            &:hover {
                color: $color-black;
            }

            &:last-child {
                border-bottom: none;
            }

            .icon {
                @include inline-flex(center, center);
                height: 100%;
                padding-right: 20px;
            }

            .text {
                display: inline-flex;
                padding: 10px 0;
            }
        }
    }
}
</style>