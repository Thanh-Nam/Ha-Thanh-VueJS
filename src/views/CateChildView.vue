<template>
    <compo-header />
    <compo-banner :src="src" :title="title" />
    <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px] grid grid-cols-4 gap-[30px]">
        <div class="navbar col-span-1">
            <compo-nav />
        </div>
        <div class="col-span-3">
            <compo-product :listChild="listChild" :cateName="cateName" v-if="listChild.length > 0 && cateName" />
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
            title: '',
            src: '../../src/assets/img/banner.webp',
            listChild: [],
            cateName: null
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoNav,
        compoProduct,
        compoFooter
    },
    computed: {
        ...mapGetters(['getProductsByCateName']),
        products() {
            return this.getProductsByCateName(this.$route.params.cateName);
        },
        categoryName() {
            return this.products.categoryName;
        }
    },
    created() {
        this.$store.dispatch('fetchCategories')
        .then(() => {
            this.cateName = this.categoryName;
        })
    },
    watch: {
        products: {
            handler(newVal) {
                if (newVal.products.length > 0) {
                this.listChild = newVal.products;
                }
            },
            immediate: true
        },
        categoryName: {
            handler(newVal) {
                this.cateName = newVal;
            }
        }
    },
}
</script>

<style>

</style>