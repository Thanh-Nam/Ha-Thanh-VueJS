<template>
    <div>
        <div class="filter gap-[10px] flex items-center justify-between p-[10px] bg-[#f9f9f9] mb-[10px]">
            <p class="font-semibold text-[16px] md:text-[18px] uppercase" v-if="isProductPage">Tất cả sản phẩm</p>
            <p class="font-semibold text-[16px] md:text-[18px] uppercase" v-else>{{ cateName }}</p>
            <div class="flex items-center gap-[10px]">
                <span>Sắp xếp theo:</span>
                <select v-model="valueSelect" @change="handleChange" class="p-[10px] outline-none border-[1px] border-solid border-[#e5e5e5]">
                    <option value="">Mặc định</option>
                    <option value="increases">Giá tăng</option>
                    <option value="reduced">Giá giảm</option>
                </select>
            </div>
        </div>
        <div class="list-product grid grid-cols-3 gap-[10px]" v-if="isProductPage">
            <div class="pro-item" v-for="(item, index) in allProducts" :key="index">
                <compo-item :item="item" />
            </div>
        </div>
        <div class="list-product grid grid-cols-3 gap-[10px]" v-else>
            <div class="pro-item" v-for="(item, index) in cateProduct" :key="index">
                <compo-item :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import compoItem from './compoItem.vue'
export default {
    data() {
        return {
            isProductPage: window.location.pathname === '/product',
            allProducts: [],
            cateProduct: [],
            valueSelect: '',
        }
    },
    methods: {
        handleChange() {
            if(this.valueSelect === '') {
                this.allProducts = this.listCate ;
                this.cateProduct = this.listChild ;
            } else if(this.valueSelect === 'increases') {
                if(this.isProductPage) {
                    this.allProducts = this.allProducts.sort((a, b) => a.sizeAndPrice[0].price - b.sizeAndPrice[0].price);
                }
                else {
                    this.cateProduct = this.cateProduct.sort((a, b) => a.sizeAndPrice[0].price - b.sizeAndPrice[0].price);
                }
            } else if(this.valueSelect === 'reduced') {
                if(this.isProductPage) {
                    this.allProducts = this.allProducts.sort((a, b) => b.sizeAndPrice[0].price - a.sizeAndPrice[0].price);
                }
                else {
                    this.cateProduct = this.cateProduct.sort((a, b) => b.sizeAndPrice[0].price - a.sizeAndPrice[0].price);
                }
            }
        },
        click(e){
            console.log(e)
        },
        updateAllProducts(val) {
            this.allProducts = Object.values({ ...val });
        },
        updateCateProduct(val) {
            this.cateProduct = Object.values({ ...val });
        },
    },
    props: {
        listCate: Object,
        listChild: Object,
        cateName: String,
    },
    components: {
        compoItem,
    },
    created() {
        this.allProducts = Object.values({ ...this.listCate });
        this.cateProduct = Object.values({ ...this.listChild });
    },
    watch: {
        listCate(val) {
            this.updateAllProducts(val);
        },
        listChild(val) {
            this.updateCateProduct(val);
        }
    }
}
</script>

<style>
.filter {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>