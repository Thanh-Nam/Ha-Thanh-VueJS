<template>
    <section class="banner">
        <swiper :slides-per-view="1" :space-between="10" :loop="true" :pagination="pagination" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules">
            <swiper-slide v-for="(item, index) in listSlide" :key="index">
                <img :src="item.src" alt="" class="w-full h-[60vh] object-cover">
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
export default {
    name: 'compo-banner',
    data() {
        return {
            listSlide: [
                {src: '../../src/assets/img/banner1.jpg'},
                {src: '../../src/assets/img/banner1.jpg'},
                {src: '../../src/assets/img/banner1.jpg'},
                {src: '../../src/assets/img/banner1.jpg'},
            ],
            pagination: {
                clickable: true,
            },
            modules: [Autoplay, Pagination],
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    }
}
</script>
<style>
    .banner .swiper-pagination-bullet {
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 0;
        transition: all .3s linear;
        opacity: 1;
    }
    .banner .swiper-pagination-bullet-active {
        width: 40px;
        background: #76A021;
    }
</style>
