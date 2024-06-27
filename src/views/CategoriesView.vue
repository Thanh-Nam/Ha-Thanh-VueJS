<template>
    <compo-header />
    <compo-banner :src="src" :title="title" />
    <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px] grid grid-cols-4 gap-[30px]">
        <div class="navbar col-span-1">
            <compo-nav @handlefilter="handlefilter" />
        </div>
        <div class="col-span-3">
            <div v-if="listCate.length > 0">
                <compo-product :listCate="listCate" />
            </div>
            <div v-else>
                Không có sản sản phẩm nào!!!
            </div>
        </div>
    </div>
    <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoNav from '../components/product/compoNav.vue';
import compoProduct from '../components/product/compoProduct.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            title: 'Sản phẩm',
            src: '../../src/assets/img/banner.webp',
            allCate: [],
            listCate: [],
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoNav,
        compoProduct,
        compoFooter
    },
    methods: {
        handlefilter(filter) {
            if(filter === 'under-2000') {
                this.listCate = this.allCate.filter(product => product.sizeAndPrice[0].price <= 2000000);
            }
            else if(filter === '2000-6000') {
                this.listCate = this.allCate.filter(product => product.sizeAndPrice[0].price > 2000000 && product.sizeAndPrice[0].price <= 6000000);
            }
            else if(filter === '6000-10000') {
                this.listCate = this.allCate.filter(product => product.sizeAndPrice[0].price > 6000000 && product.sizeAndPrice[0].price <= 10000000);
            }
            else if(filter === 'min-10000') {
                this.listCate = this.allCate.filter(product => product.sizeAndPrice[0].price > 10000000);
            }
        }
    },
    computed: {
        ...mapGetters(['getAllProducts']),
    },
    watch: {
        getAllProducts(newCategories) {
            if (newCategories.length > 0) {
            this.allCate = newCategories;
            this.listCate = Object.values( { ...this.allCate } );
            }
        }
    },
    async created() {
        await this.$store.dispatch('fetchCategories');
    }
}
</script>

<style>

</style>