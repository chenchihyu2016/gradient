<template>
    <div class="curtain" ref="curtain">
        <div class="opening_text" ref="openingText">
            波波與我的 2021 回顧
            <p class="inner_text">將會有音樂撥放，請記得戴上耳機</p>
            <b-icon icon="headphones" style="display: block" />
            <button class="start_button" @click="start">開始</button>
        </div>
        <template v-for="(content, index) in contents">
            <div v-if="content.images.length > 0" class="item" :key="index">
                <div class="images">
                    <div
                        class="image"
                        :data-number-of-images="content.images.length"
                    >
                        <div class="number_of_images" v-if="isMobile">
                            {{ content.images.length }} 張
                        </div>
                        <img
                            class="img"
                            v-for="image in content.images"
                            :key="image.index"
                            :src="getImgUrl(image)"
                        />
                    </div>
                </div>
                <div class="text">{{ content.text }}</div>
            </div>
            <div v-else class="item text_only" :key="index">
                <div class="inner_text">{{ content.text }}</div>
            </div>
        </template>
    </div>
</template>

<script>
import config from "@/../public/config.json";
export default {
    data() {
        return {
            sound: new Audio(require("@/assets/music/soundtrack.mp3")),
            contents: config.contents,
        };
    },
    created() {
        const _this = this;

        _this.$store.commit("setMeta", "VLetter");
    },
    computed: {
        isMobile() {
            return this.$store.getters.isMobile;
        },
    },
    methods: {
        start() {
            const _this = this;
            const curtain = _this.$refs.curtain;
            const openingText = _this.$refs.openingText;

            curtain.style.animationPlayState = "running";
            openingText.style.animationPlayState = "running";

            _this.sound.play();
        },
        backToLevel() {
            const $router = this.$router;

            $router.push({ name: "Level" });
        },
        getImgUrl(pic) {
            return require(`@/assets/images/${pic}.jpg`);
        },
    },
    beforeDestroy() {
        const _this = this;

        _this.sound.pause();
        _this.sound.currentTime = 0;
    },
};
</script>

<style scoped lang='scss'>
.curtain {
    @include flex(center, center);
    flex-direction: column;
    width: 100%;
    margin: auto;
    animation: slide-up 270s linear 2.5s 1 normal forwards;
    animation-play-state: paused;
    position: absolute;
    top: 0;
    overflow: hidden;

    .opening_text {
        @include flex(center, center);
        flex-direction: column;
        width: 100%;
        height: 100vh;
        font-size: 24px;
        animation: fade-out 2s linear 0s 1 normal forwards;
        animation-play-state: paused;

        .inner_text {
            font-size: 12px;
            margin: 20px 0;
        }

        .start_button {
            border: 1px solid $color-white;
            border-radius: 5px;
            margin-top: 20px;
            padding: 5px 15px;
            font-size: 16px;
            background: transparent;
            color: $color-white;
            cursor: pointer;
            transition: 0.3s all ease;

            @media (hover: hover) {
                &:hover {
                    background: $color-white;
                    color: rgba($color-black, 0.85);
                }
            }
        }
    }

    .item {
        @include inline-flex(center, center);
        flex-direction: column;
        height: 55vh;
        margin: 2% 0;
        width: 80%;
        backdrop-filter: blur(2px);
        background: #ffffff10;
        border-radius: 10px;
        padding: 10px;

        @media screen and (min-width: 1023px) {
            width: 90%;
            flex-direction: row;
            margin: 1% 0;
        }

        .images {
            @include inline-flex(center, center);
            position: relative;
            flex: 7.5;
            height: 100%;
            width: 100%;
            overflow: auto;
            margin-bottom: 10px;

            &::-webkit-scrollbar {
                display: none;
            }

            @media screen and (min-width: 1023px) {
                border-bottom: none;
                flex-wrap: wrap;
                padding-left: 0;
                flex: 7;
            }

            .number_of_images {
                position: absolute;
                top: -1%;
                left: 10%;
                color: $color-white;
                background: rgba($color-black, 0.7);
                padding: 10px;
                border-radius: 0 0 5px 0;
            }

            .image {
                @include inline-flex(flex-start, center);
                flex-wrap: nowrap;
                width: 80%;
                height: 100%;
                overflow: scroll;

                &::-webkit-scrollbar {
                    display: none;
                }

                @media screen and (min-width: 1023px) {
                    width: 90%;

                    &::-webkit-scrollbar {
                        background: transparent; /* Optional: just make scrollbar invisible */
                        display: block;
                    }

                    &::-webkit-scrollbar-corner {
                        display: none;
                    }

                    &::-webkit-scrollbar-thumb {
                        background: rgba($color-white, 0.3);
                        border-radius: 5px;
                    }

                    &[data-number-of-images="1"],
                    &[data-number-of-images="2"] {
                        justify-content: center;

                        &::-webkit-scrollbar {
                            display: none;
                        }
                    }
                }

                .img {
                    max-width: 100%;
                    max-height: 100%;
                    margin-right: 5%;
                    border-radius: 5px;

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }

        .text {
            @include inline-flex(center, center);
            flex: 2.5;
            text-align: justify;
            margin: 0 20px;
            border-top: 1px solid $color-white;
            padding: 0 10px;
            line-height: 20px;

            @media screen and (min-width: 1023px) {
                flex: 3;
                height: 90%;
                border-top: none;
                border-left: 1px solid $color-white;
                margin: 0 0 0 10px;
                padding-right: 0;
            }
        }
    }

    .text_only {
        @include inline-flex(center, center);
        height: 100%;
        line-height: 24px;
        background-color: #ffffff10;
        border-radius: 10px;
        text-align: justify;

        .inner_text {
            margin: 0 20px;
            padding: 0 10px;
        }
    }
}

@keyframes slide-up {
    100% {
        top: -690%;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>