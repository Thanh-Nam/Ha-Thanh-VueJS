<template>
    <main>
        <compo-header />
        <compo-banner :src="src" :title="title" />
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:pb-[80px] lg:pb-[60px] md:pb-[40px] pb-[30px] md:pt-[40px] pt-[30px]">
            <div class="block lg:grid grid-cols-10 gap-[30px]">
                <div class="compo-slide xl:col-span-3 lg:col-span-4 mb-[12px] md:mb-[16px] lg:mb-0">
                    <compo-slide :listImage="listImage" v-if="listImage" />
                </div>
                <div class="xl:col-span-5 lg:col-span-6">
                    <compo-info :product="product" />
                    <compo-commit :commit="commit" class="block xl:hidden mt-[12px] md:mt-[20px]" />
                </div>
                <compo-commit :commit="commit" class="col-span-2 hidden xl:block" />
            </div>
            <compo-tab class="mt-[12px] md:mt-[20px]" :detail="detail" :proDes="proDes" v-if="detail && proDes" />
            <compo-relate class="mt-[12px] md:mt-[20px]" />
        </div>
        <compo-message />
        <compo-footer />
    </main>
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoSlide from '../components/productDetail/compoSlide.vue';
import compoInfo from '../components/productDetail/compoInfo.vue';
import compoCommit from '../components/productDetail/compoCommit.vue';
import compoTab from '../components/productDetail/compoTab.vue';
import compoRelate from '../components/productDetail/compoRelate.vue';
import compoMessage from '../components/compoMessage.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            title: '',
            src: '../../src/assets/img/banner.webp',
            commit: [
                {
                    image: '../../src/assets/img/icon-cam-ket.png',
                    text: 'Cam kết hàng chính hãng'
                },
                {
                    image: '../../src/assets/img/icon-cam-ket.png',
                    text: 'Cam kết hàng chính hãng'
                },
                {
                    image: '../../src/assets/img/icon-cam-ket.png',
                    text: 'Cam kết hàng chính hãng'
                },
                {
                    image: '../../src/assets/img/icon-cam-ket.png',
                    text: 'Cam kết hàng chính hãng'
                },
            ],
            detail: null,
            proDes: null,
            listImage: null,
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoSlide,
        compoInfo,
        compoCommit,
        compoTab,
        compoRelate,
        compoMessage,
        compoFooter
    },
    computed: {
        ...mapGetters(['getProductByIdFromAllProducts']),
        product() {
            return this.getProductByIdFromAllProducts(Number(this.$route.params.productId));
        }
    },
    created() {
        this.$store.dispatch('fetchCategories')
        .then(() => {
            this.detail = this.product.detail;
            this.proDes = this.product.proDes;
            this.listImage = this.product.listImage;
        })
    },
}
</script>

<style>

</style>