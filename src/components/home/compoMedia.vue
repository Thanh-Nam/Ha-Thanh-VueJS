<template>
    <section class="media">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-[#76A021]">Hình ảnh thực tế</h3>
            <div class="list-media">
                <swiper :slides-per-view="2" :grid="{rows: 2}" :spaceBetween="10" :pagination="pagination" :modules="modules" :breakpoints="breakpoints">
                    <swiper-slide v-for="(item, index) in listMedia" :key="index">
                        <a :href="item.image" data-fancybox="gallery">
                            <div class="relative pb-[80%]">
                                <img :src="item.image" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
                
            </div>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/grid';
    import { Grid, Pagination } from 'swiper/modules';
    import { Fancybox } from '@fancyapps/ui';
    import '@fancyapps/ui/dist/fancybox/fancybox.css'
export default {
    data() {
        return {
            listMedia: [
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
                {image: '../../src/assets/img/chan-ga-khach-san.jpg'},
                {image: '../../src/assets/img/hinh-anh-thuc-te.jpg'},
            ],
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 5,
                }
            },
            pagination: {
                clickable: true,
            },
            modules: [Grid, Pagination],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        this.activateFancybox();
    },
    methods: {
        activateFancybox() {
            Fancybox.bind('[data-fancybox="gallery"]');
        }
    }
}
</script>

<style>
    @media (min-width: 1024px) {
        .media .swiper-wrapper {
            max-height: 465px;
        }
    }
    @media (max-width: 1023px) {
        .media .swiper-wrapper {
            max-height: 550px;
        }
    }
    @media (max-width: 767px) {
        .media .swiper-wrapper {
            max-height: 610px;
        }
    }
    @media (max-width: 530px) {
        .media .swiper-wrapper {
            max-height: 430px;
        }
    }
    @media (max-width: 390px) {
        .media .swiper-wrapper {
            max-height: 320px;
        }
    }
    .media .swiper-pagination {
        position: relative;
        bottom: 0;
    }
    .media .swiper-pagination-bullet {
        width: 30px;
        height: 4px;
        background: #d5d5d5;
        border-radius: 0;
        transition: all .3s linear;
        opacity: 1;
    }
    .media .swiper-pagination-bullet-active {
        width: 40px;
        background: #76A021;
    }
</style>