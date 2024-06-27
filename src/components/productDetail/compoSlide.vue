<template>
    <div class="slide-product">
        <swiper :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2 md:mb-[10px] mb-[6px]">
            <swiper-slide v-for="(item, index) in listImage" :key="index">
                <a :href="item" data-fancybox="gallery">
                    <div class="relative pb-[100%]">
                        <img :src="item" class="absolute top-0 left-0 w-[100%] h-[100%] object-cover" />
                    </div>
                </a>
            </swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="3" :breakpoints="breakpoints" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide class="relative pt-[25%] md:pt-[15%] lg:pt-[20%] cursor-pointer" v-for="(item, index) in listImage" :key="index">
                <img :src="item" class="absolute top-0 left-0 w-[100%] h-[100%] object-cover" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css'
export default {
    data() {
        return {
            thumbsSwiper: null,
            modules: [FreeMode, Thumbs],
            breakpoints: {
                '1024' : {
                    slidesPerView : 4,
                },
                '768' : {
                    slidesPerView : 6,
                }
            },
        }
    },
    props: {
        listImage: Array,
    },
    components: {
        Swiper,
        SwiperSlide
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        activateFancybox() {
            Fancybox.bind('[data-fancybox="gallery"]');
        }
    },
    mounted() {
        this.activateFancybox();
    },
}
</script>

<style>
    .slide-product .swiper-slide-visible {
        border-radius: 12px;
        overflow: hidden;
    }
    .slide-product .swiper-slide-thumb-active {
        border: 2px solid #FFD700;
    }
</style>