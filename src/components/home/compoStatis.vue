<template>
    <section class="statis">
        <div class="bg-statis absolute w-full h-full z-0">
            <img src="../../assets/img/bg-statis.png" alt="" class="w-full h-full object-cover">
        </div>
        <div class="container relative z-[1] px-[8px] md:px-[16px] 2xl:px-0 md:py-[40px] py-[20px]">
            <swiper :slides-per-view="2" :space-between="10" :breakpoints="breakpoints">
                <swiper-slide v-for="(item, index) in listStatis" :key="index">
                    <div class=""><img :src="item.img" alt="" class="w-[80px] mx-auto"></div>
                    <p class="text-[16px] md:text-[20px] uppercase font-semibold text-center text-white mt-[12px] md:mt-[16px]">{{ item.text }}</p>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    name: 'compo-statis',
    data() {
        return {
            listStatis: [
                {
                    img: '../../src/assets/img/icon-chat-luong.png',
                    text: 'Chất lượng'
                },
                {
                    img: '../../src/assets/img/icon-uy-tin.png',
                    text: 'Uy tín'
                },
                {
                    img: '../../src/assets/img/icon-doi-ngu.png',
                    text: 'Đội ngũ chuyên nghiệp'
                },
                {
                    img: '../../src/assets/img/gia-re.png',
                    text: 'Giá cả hợp lý'
                }
            ],
            breakpoints: {
                '768': {
                    slidesPerView: 3,
                },
                '1024': {
                    slidesPerView: 4,
                },
            }
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    }
}
</script>

<style>
    .statis {
        position: relative;
    }
    .bg-statis::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }
</style>