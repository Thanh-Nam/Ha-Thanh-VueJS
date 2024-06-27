<template>
    <section class="feedback">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-white relative z-[1]">Đánh giá của khách hàng</h3>
            <swiper :slides-per-view="1" :space-between="10" :loop="true" :pagination="pagination" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules" :breakpoints="breakpoints">
                <swiper-slide v-for="(item, index) in listFeedback" :key="index">
                    <div class="relative bg-[#76A021] rounded-[12px] px-[12px] pb-[20px] pt-[50px]">
                        <div class="absolute left-[50%] translate-x-[-50%] top-[-40px] rounded-full w-[80px] h-[80px] overflow-hidden"><img :src="item.image" alt="" class="w-full h-full object-cover"></div>
                        <p class="text-center text-white text-[18px] font-semibold mb-[4px]">{{ item.name }}</p>
                        <p class="text-center text-white text-[14px] font-normal pb-[16px] border-b-[2px] border-solid border-white">{{ item.job }}</p>
                        <p class="text-center text-white italic text-[14px] mt-[12px]">{{ item.content }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
export default {
    data() {
        return {
            listFeedback:[
                {
                    image: '../../src/assets/img/img-feedback.jpg',
                    name: 'Nguyễn Thị B',
                    job: 'Quản lý khách sạn',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate mollitia provident deserunt libero aspernatur commodi rem vitae iusto aperiam ullam quod, accusantium cumque sed sapiente impedit id labore veniam.'
                },
                {
                    image: '../../src/assets/img/img-feedback.jpg',
                    name: 'Nguyễn Thị C',
                    job: 'Quản lý khách sạn',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate mollitia provident deserunt libero aspernatur commodi rem vitae iusto aperiam ullam quod, accusantium cumque sed sapiente impedit id labore veniam.'
                },
                {
                    image: '../../src/assets/img/img-feedback.jpg',
                    name: 'Nguyễn Thị D',
                    job: 'Quản lý khách sạn',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate mollitia provident deserunt libero aspernatur commodi rem vitae iusto aperiam ullam quod, accusantium cumque sed sapiente impedit id labore veniam.'
                },
                {
                    image: '../../src/assets/img/img-feedback.jpg',
                    name: 'Nguyễn Thị E',
                    job: 'Quản lý khách sạn',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate mollitia provident deserunt libero aspernatur commodi rem vitae iusto aperiam ullam quod, accusantium cumque sed sapiente impedit id labore veniam.'
                },
                {
                    image: '../../src/assets/img/img-feedback.jpg',
                    name: 'Nguyễn Thị F',
                    job: 'Quản lý khách sạn',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate mollitia provident deserunt libero aspernatur commodi rem vitae iusto aperiam ullam quod, accusantium cumque sed sapiente impedit id labore veniam.'
                }
            ],
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
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
    .feedback {
        position: relative;
        background-image: url('../../assets/img/bg-statis.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .feedback::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
    }
    .feedback .swiper-wrapper {
        padding-top: 50px;
    }
    .feedback .swiper-pagination {
        position: relative;
        bottom: 0;
    }
    .feedback .swiper-pagination-bullet {
        width: 30px;
        height: 4px;
        background: #d5d5d5;
        border-radius: 0;
        transition: all .3s linear;
        opacity: 1;
    }
    .feedback .swiper-pagination-bullet-active {
        width: 40px;
        background: white;
    }
</style>