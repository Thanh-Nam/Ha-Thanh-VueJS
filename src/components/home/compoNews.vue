<template>
    <section class="news">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-[#76A021]">
                Tin tức mới nhất
            </h3>
            <div class="list-news">
                <swiper :slides-per-view="1.1" :space-between="10" :breakpoints="breakpoints" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules">
                    <swiper-slide v-for="(item, index) in listNews" :key="index">
                        <div class="border-[1px] border-solid border-[#76A021] rounded-[8px] overflow-hidden">
                            <router-link to="/" class="news-img w-full relative pb-[80%] overflow-hidden block">
                                <img :src="item.image" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
                            </router-link>
                            <div class="p-[8px] md:p-[12px] lg:p-[16px]">
                                <router-link to="/" class="text-[16px] font-semibold line-clamp-2 hover:text-[#76A021] transition-all duration-300 ease-linear mb-[8px]">
                                    {{ item.title }}
                                </router-link>
                                <div class="md:flex items-center gap-[12px]">
                                    <p class="text-[14px] text-justify line-clamp-3">{{ item.des }}</p>
                                </div>
                                <router-link to="/" class="button-new-detail text-[12px] text-[#76A021] font-normal italic mt-[8px] inline-block">
                                    Xem chi tiết
                                    <font-awesome-icon :icon="['fas', 'angles-right']" class="ml-[2px] text-[10px] transition-all duration-300 ease-linear" />
                                </router-link>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="text-center lg:mt-[40px] md:mt-[24px] mt-[8px]"><compo-button :titleButton="titleButton" :srcButton="srcButton" /></div>
            </div>
        </div>
    </section>
</template>

<script>
import compoButton from '../compoButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export default {
    data() {
        return {
            titleButton : 'Xem tất cả',
            srcButton: '',
            modules: [Autoplay],
            breakpoints: {
                '460': {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
            listNews: [
                {
                    image: '../../src/assets/img/img-news.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy',
                    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor suscipit aut dignissimos et, porro eveniet quasi dolorem deserunt soluta similique veritatis id nihil culpa ex nam adipisci autem quos. Odit!'
                },
                {
                    image: '../../src/assets/img/img-news.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy',
                    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor suscipit aut dignissimos et, porro eveniet quasi dolorem deserunt soluta similique veritatis id nihil culpa ex nam adipisci autem quos. Odit!'
                },
                {
                    image: '../../src/assets/img/img-news.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy',
                    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor suscipit aut dignissimos et, porro eveniet quasi dolorem deserunt soluta similique veritatis id nihil culpa ex nam adipisci autem quos. Odit!'
                },
                {
                    image: '../../src/assets/img/img-news.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy',
                    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor suscipit aut dignissimos et, porro eveniet quasi dolorem deserunt soluta similique veritatis id nihil culpa ex nam adipisci autem quos. Odit!'
                },
                {
                    image: '../../src/assets/img/img-news.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy',
                    des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor suscipit aut dignissimos et, porro eveniet quasi dolorem deserunt soluta similique veritatis id nihil culpa ex nam adipisci autem quos. Odit!'
                },
            ],

        }
    },
    components: {
        compoButton,
        Swiper,
        SwiperSlide,
    },
}
</script>

<style>
    .news {
    background: #f9f9f9;
    }
    .news-img img {
        transition: all .3s linear;
        overflow: hidden;
    }
    .news-img:hover img {
        transform: scale(1.1);
    }
    .button-new-detail:hover svg {
        transform: translateX(4px);
    }
</style>