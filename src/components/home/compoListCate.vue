<template>
    <section class="list-cate">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <div v-for="(itemCate, index) in listCate" :key="index" class="mb-[16px] md:mb-[20px] lg:mb-[30px] last:mb-0">
                <div class="md:flex items-center justify-between mb-[12px] md:mb-[16px] lg:mb-[24px]"  :id="convertToId(itemCate.cateName)" v-if="scrollRequested">
                    <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-[#76A021] mb-[8px] md:mb-0">{{ itemCate.cateName }}</h3>
                    <compo-button :titleButton="titleButton" :srcButton="srcButton" />
                </div>
                <div class="">
                    <swiper :slides-per-view="1.5" :space-between="10" :breakpoints="breakpoints">
                        <swiper-slide v-for="item in itemCate.listProduct" :key="item.id">
                            <compo-item :item="item" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import compoButton from '../compoButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import compoItem from '../product/compoItem.vue'
export default {
    data() {
        return {
            titleButton : 'Xem tất cả',
            srcButton: '',
            breakpoints: {
                '460': {
                    slidesPerView: 2.5,
                    spaceBetween: 15,
                },
                '768': {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                },
                '1024': {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                },
            },
        }
    },
    components: {
        compoButton,
        Swiper,
        SwiperSlide,
        compoItem
    },
    props: {
        listCate: Object,
        scrollRequested: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        convertToId(name) {
            return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        },
    }
    
}
</script>

<style>
    
    .list-cate .swiper-wrapper {
        padding: 10px 0;
    }
    
</style>