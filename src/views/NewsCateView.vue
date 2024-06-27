<template>
    <compo-header />
    <compo-banner :src="src" :title="title" />
    <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:pb-[80px] lg:pb-[60px] md:pb-[40px] pb-[30px]  md:pt-[30px] pt-[20px]">
        <compo-top :topList="topList" />
        <compo-bot class="mt-[8px] md:mt-[12px] lg:mt-[20px]" :botList="botList" />
        
    </div>
    <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoTop from '../components/news/compoTop.vue';
import compoBot from '../components/news/compoBot.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
export default {
    data() {
        return {
            title: 'Tin tức',
            src: '../../src/assets/img/banner.webp',
            listNews: [
                {
                    id: 1,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 1',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 2,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 2',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 3,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 3',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 4,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 4',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 5,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 5',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 6,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 6',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 7,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 7',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
                {
                    id: 8,
                    image: '../../src/assets/img/hinh-anh-thuc-te.jpg',
                    title: 'Cách chọn chăn ga gối đệm hợp phong thủy 8',
                    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aperiam, quidem nobis omnis commodi maxime ipsum rem similique unde molestias quis ipsam sapiente nemo alias minima officiis totam soluta. Animi!',
                },
            ],
            topList: [],
            botList: [],
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoTop,
        compoBot,
        compoFooter
    },
    methods: {
        click() {
            console.log(this.topList);
            console.log(this.botList);
        }
    },
    created() {
            this.topList = this.listNews.slice(0, 3);
            this.botList = this.listNews.slice(3);
    }
}
</script>

<style>

</style>