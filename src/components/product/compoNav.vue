<template>
    <div>
        <div class="bg-[#f9f9f9] rounded-[8px] cate-nav mb-[30px]">
            <h3 class="md:text-[18px] font-semibold p-[6px] md:p-[10px] border-b-[1px] border-solid border-[#e7e7e7]">Danh mục sản phẩm</h3>
            <ul class="p-[6px] md:p-[10px]">
                <li class="title-cate" v-for="(item, index) in allCateNames" :key="index"><router-link :to="{ name: 'categoryChild', params: { cateName: convertToId(item) } }" class="text-[16px] transition-all duration-300 ease-linear"><font-awesome-icon :icon="['fas', 'caret-right']" class="mr-[8px]" />{{ item }}</router-link></li>
            </ul>
        </div>
        <div class="bg-[#f9f9f9] rounded-[8px] filter-price" v-show="isProduct || isProductChild">
            <h3 class="md:text-[18px] font-semibold p-[6px] md:p-[10px] border-b-[1px] border-solid border-[#e7e7e7]">Giá</h3>
            <ul class="p-[6px] md:p-[10px]">
                <li @click="filterProducts('under-2000')">
                    <label for="max-2000" class="inline-flex items-center gap-[10px] cursor-pointer">
                        <input type="radio" id="max-2000" name="fillterPrice">
                        <span>Dưới 2.000.000đ</span>
                    </label>
                </li>
                <li @click="filterProducts('2000-6000')">
                    <label for="2000-6000" class="inline-flex items-center gap-[10px] cursor-pointer">
                        <input type="radio" id="2000-6000" name="fillterPrice">
                        <span>2.000.000đ - 6.000.000đ</span>
                    </label>
                </li>
                <li @click="filterProducts('6000-10000')">
                    <label for="6000-10000" class="inline-flex items-center gap-[10px] cursor-pointer">
                        <input type="radio" id="6000-10000" name="fillterPrice">
                        <span>6.000.000đ - 10.000.000đ</span>
                    </label>
                </li>
                <li @click="filterProducts('min-10000')">
                    <label for="min-10000" class="inline-flex items-center gap-[10px] cursor-pointer">
                        <input type="radio" id="min-10000" name="fillterPrice">
                        <span>Trên 10.000.000đ</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isProduct: window.location.pathname === '/product',
            isProductChild: window.location.pathname === '/category/*',
            
        }
    },
    methods: {
        convertToId(name) {
            return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        },
        filterProducts(filter) {
            this.$emit('handlefilter', filter);
        }
    },
    computed: {
        ...mapGetters(['allCateNames']),
    },
    created() {
        this.$store.dispatch('fetchCategories')
    }
}
</script>

<style>
    .title-cate:hover a {
        color: #76A021;
    }
    .title-cate, .filter-price ul li {
        margin-bottom: 8px;
    }
    .title-cate:last-child, .filter-price ul li:last-child{
        margin-bottom: 0;
    }
</style>