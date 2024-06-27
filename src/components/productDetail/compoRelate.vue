<template>
        <div class="compo-relate">
            <div class="md:flex items-center justify-between mb-[12px] md:mb-[16px] lg:mb-[24px]">
                <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-[#76A021] mb-[8px] md:mb-0">Sản phẩm khuyến mại</h3>
            </div>
            <div class=""> 
                <swiper :slides-per-view="1.5" :space-between="10" :loop="true" :breakpoints="breakpoints" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules">
                    <swiper-slide v-for="item in listProduct" :key="item.id">
                        <compo-item :item="item" :id="item.id" :image="item.image" :name="item.name" :sizeAndPrice="item.sizeAndPrice" :discount="item.discount" @click="handleOnClick" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import compoItem from '../product/compoItem.vue'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            modules: [Autoplay],
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
            listProduct: [],
            productId: Number(this.$route.params.productId),
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        compoItem
    },
    methods: {
        listDiscount(productId) {
            const productsWithDiscount = this.getAllProducts.filter(product => product.discount && product.discount !== '');
            const sortedByDiscount = productsWithDiscount.sort((a, b) => {
                const discountComparison = parseFloat(b.discount) - parseFloat(a.discount);
                if (discountComparison === 0) {
                    return a.name.localeCompare(b.name);
                }
                return discountComparison;
            });
            const filteredProducts = sortedByDiscount.filter(product => product.id !== productId);

            return filteredProducts;
        },
        updateClick(selectedProductID) {
            const filteredProducts = this.listDiscount(this.productId).filter(product => product.id !== selectedProductID);
            this.listProduct = filteredProducts;
        },
        handleOnClick(productID) {
            this.updateClick(productID);
        }
    },
    computed: {
        ...mapGetters(['getAllProducts']),
        discountedProducts() {
            return this.listDiscount(this.productId);
        }
    },
    watch: {
        discountedProducts(newList) {
            this.listProduct = newList;
        },
        '$route.params.productId'(newProductId) {
            this.productId = Number(newProductId);
            this.updateClick(this.productId);
        }
    },
    created() {
        this.productId = Number(this.$route.params.productId);
        this.listProduct = this.discountedProducts;
    }
    
}
</script>

<style>
    
    .compo-relate .swiper-wrapper {
        padding: 10px 0;
    }
    
</style>