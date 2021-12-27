<template>
    <div
        class="nav_background"
        @click.self="closeNav"
        :class="{ showNavbackground }"
    >
        <div class="left_nav" :class="{ isNavOpen }">
            <div class="small_block" v-if="isMobile">
                <b-icon icon="arrow-left" v-if="isNavOpen" class="icon" />
                <b-icon icon="arrow-right" v-else class="icon" />
            </div>
            <div class="close_icon" @click.stop="closeNav">&#10006;</div>
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
</template>

<script>
import Config from "@/../public/config.json";
export default {
    data() {
        return {
            showBackToLevel: false,
            description: Config.description,
            hiddenDescription: Config.hiddenDescription,
            showNavbackground: this.$store.getters.isNavOpen,
        };
    },
    computed: {
        isNavOpen() {
            return this.$store.getters.isNavOpen;
        },
        isMobile() {
            return this.$store.getters.isMobile;
        },
        showHiddenDescription() {
            const _this = this;
            const $store = _this.$store;

            // return true;

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
        isNavOpen: function () {
            const _this = this;

            if (_this.isNavOpen) _this.showNavbackground = true;
            else
                setTimeout(() => {
                    this.showNavbackground = false;
                }, 300);
        },
    },
    methods: {
        backToLevel() {
            const _this = this;

            _this.$router.push({ name: "Level" });
            _this.closeNav();
        },
        closeNav() {
            const _this = this;

            _this.$store.commit("setIsNavOpen", false);
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
    right: 0;
    background: transparent;
    z-index: -1;
    backdrop-filter: blur(2px);

    .left_nav {
        @include flex(flex-end, flex-start);
        position: relative;
        flex-direction: column;
        color: $color-white;
        background: rgba($color-black, 0.3);
        transform: translateX(-100%);
        width: 60vw;
        height: 100%;
        font-size: 24px;
        padding: 0 20px;
        transition: 0.3s transform ease;

        @media screen and (min-width: 1023px) {
            width: 20vw;
        }

        .small_block {
            @include flex(center, center);
            position: absolute;
            top: 0;
            right: -30px;
            width: 30px;
            height: 7vh;
            background: rgba($color-black, 0.3);
            border-radius: 0 10px 10px 0;

            .icon {
                width: 50%;
                height: 50%;
            }
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
            top: 2%;
            left: 20px;
            right: 20px;
            font-size: 20px;
            line-height: 30px;
            text-align: justify;

            @media screen and (min-width: 1023px) {
                top: 50px;
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

    .isNavOpen {
        transform: translateX(0);
    }
}

.showNavbackground {
    z-index: 9999;
}
</style>