<template>
    <div class="pro-item bg-white rounded-[4px] overflow-hidden">
        <div class="pro-img w-full relative pb-[80%] overflow-hidden">
            <router-link :to="{name: 'productDetail', params:{ productId: item.id, productName: formatProductName(item.name) }}" v-bind="{ productId: null, productName: null }" class="absolute top-0 left-0 w-full h-full"><img :src="item.image" alt="" class="w-full h-full object-cover"></router-link>
            <p class="absolute top-[10px] right-[10px] w-[40px] h-[40px] bg-[#d80027] text-white rounded-full flex items-center justify-center"
                v-if="item.discount">{{ item.discount }}%</p>
            <button @click="handleAddCart"
                class="absolute top-[-60px] left-[10px] w-[40px] h-[40px] bg-[#76A021] text-white flex items-center justify-center rounded-full border-[1px] border-solid border-[#76A021] hover:bg-white hover:text-[#76A021]"><font-awesome-icon
                    :icon="['fas', 'cart-plus']" /></button>
        </div>
        <div class="p-[8px] md:p-[12px] lg:p-[16px]">
            <router-link :to="{name: 'productDetail', params:{ productId: item.id, productName: formatProductName(item.name) }}" v-bind="{ productId: null, productName: null }"
                class="text-[16px] font-semibold line-clamp-2 hover:text-[#76A021] transition-all duration-300 ease-linear mb-[8px]">{{
                    item.name }}</router-link>
            <div class="md:flex items-center gap-[8px] lg:gap-[12px]" v-if="item.sizeAndPrice[0].oldPrice">
                <p class="text-[#FF6347] text-[18px] font-semibold mb-[4px] md:mb-0">{{ formatPrice(item.sizeAndPrice[0].price) }}</p>
                <p class="text-[14px] text-[#D3D3D3] line-through">{{ formatPrice(item.sizeAndPrice[0].oldPrice) }}</p>
            </div>
            <div v-else>
                <p class="text-[#FF6347] text-[18px] font-semibold">{{ formatPrice(item.sizeAndPrice[0].price) }}</p>
            </div>
            <div class="text-center lg:hidden mt-[12px]">
                <button class="bg-[#76A021] text-[14px] px-[10px] py-[8px] text-white">Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            addCart: {
                'id': null,
                'name': null,
                'size': null,
                'price': null,
            },
            message: {
                'type': null,
                'text': null,
            }
        }
    },
    props: {
        item: Object,
    },
    methods: {
        ...mapActions(['addMessage']),
        formatPrice(price) {
        const formattedPrice = Number(price).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formattedPrice;
        },
        formatProductName(name) {
            return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        },
        handleAddCart() {
            if(this.item.sizeAndPrice[0].inventory > 0) {
                this.message = {'type': 'success', 'text': 'Đã thêm sản phẩm vào giỏ hàng'}
            } else {
                this.message = {'type': 'error', 'text': 'Sản phẩm tạm hết hàng'}
            }
            this.addMessage(this.message);
            console.log(this.addCart = { 'id': this.item.id, 'name': this.item.name, 'size': this.item.sizeAndPrice[0].size, 'price': this.item.sizeAndPrice[0].price});
        }
    },
}
</script>
<style>
    .pro-item {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    .pro-img img, .pro-img button {
        transition: all 0.3s linear;
        cursor: pointer;
    }
    .pro-img:hover img {
        transform: scale(1.1);
    }
    .pro-img:hover button {
        top: 10px;
    }
</style>