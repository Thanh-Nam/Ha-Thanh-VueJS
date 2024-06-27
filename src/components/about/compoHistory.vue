<template>
    <section class="history">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px] relative z-[1]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-white">Lịch sử phát triển</h3>
            <div>
                <swiper :slides-per-view="2" :space-between="10" :breakpoints="breakpoints">
                    <swiper-slide v-for="(item, index) in listHistory" :key="index">
                        <div class="">
                            <div class="history-year relative mx-auto w-[120px] h-[120px] rounded-full bg-[#76A021] text-white md:text-[20px] text-[18px] font-semibold flex items-center justify-center border-[10px] border-solid border-[#FFD700] mb-[40px]">{{ item.year }}</div>
                            <p class="italic text-[14px] p-[10px] border-[2px] border-solid border-[#76A021] rounded-[20px] text-white">{{ item.text }}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    data() {
        return {
            listHistory: [
                {
                    year: '2014',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptates autem libero, ratione ad nemo, debitis voluptas tempore unde aliquid sit necessitatibus. Distinctio, voluptate excepturi ad rem quia unde quidem.'
                },
                {
                    year: '2015',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptates autem libero, ratione ad nemo, debitis voluptas tempore unde aliquid sit necessitatibus. Distinctio, voluptate excepturi ad rem quia unde quidem.'
                },
                {
                    year: '2016',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptates autem libero, ratione ad nemo, debitis voluptas tempore unde aliquid sit necessitatibus. Distinctio, voluptate excepturi ad rem quia unde quidem.'
                },
                {
                    year: '2017',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptates autem libero, ratione ad nemo, debitis voluptas tempore unde aliquid sit necessitatibus. Distinctio, voluptate excepturi ad rem quia unde quidem.'
                },
                {
                    year: '2018',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil voluptates autem libero, ratione ad nemo, debitis voluptas tempore unde aliquid sit necessitatibus. Distinctio, voluptate excepturi ad rem quia unde quidem.'
                },
            ],
            breakpoints: {
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 4,
                    spaceBetween: 30,
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
    .history {
        background-image: url('../../assets/img/bg-lich-su-hinh-thanh.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .history::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 50%;
        z-index: 0;
    }
    .history-year::after {
        content: '';
        position: absolute;
        top: calc( 100% + 10px );
        left: 50%;
        transform: translateX(-50%);
        height: 40px;
        width: 1px;
        background: white;
    }
</style>