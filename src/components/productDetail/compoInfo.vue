<template>
    <div v-if="product">
        <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-semibold leading-[130%] mb-[8px] md:mb-[12px]">{{ product.name }}</h3>
        <div class="flex items-center gap-[20px] md:gap-[30px] lg:gap-[40px] mb-[12px] md:mb-[16px] lg:md-[20px]">
            <div>
                <span class="text-[#935E10] text-[14px] md:text-[16px] font-normal" v-if="product.sizeAndPrice[activeIndex].inventory > 0">Còn hàng</span>
                <span class="text-[#ff5047] text-[14px] md:text-[16px] font-normal" v-else>Hết hàng</span>
            </div>
            <div class="flex items-center gap-[4px]">
                <span class="text-[14px] md:text-[16px] font-normal">Đã bán:</span>
                <p class="text-[14px] md:text-[16px] font-semibold">{{ product.sold }}</p>
            </div>
            <div class="flex items-center gap-[4px]">
                <span class="text-[14px] md:text-[16px] font-normal">Tồn kho:</span>
                <p class="text-[14px] md:text-[16px] font-semibold" v-if="product.sizeAndPrice[activeIndex]">{{ product.sizeAndPrice[activeIndex].inventory }}</p>
                <p class="text-[14px] md:text-[16px] font-semibold" v-else>0</p>
            </div>
        </div>
        <div v-if="product.sizeAndPrice && activeIndex !== null && product.sizeAndPrice.length > activeIndex">
            <div class="flex items-center gap-[8px] lg:gap-[12px] mb-[12px] md:mb-[16px] lg:md-[20px]" v-if="product.sizeAndPrice[activeIndex].oldPrice">
                <p class="text-[#FF6347] text-[18px] md:text-[22px] lg:text-[26px] font-semibold">{{ formatPrice(product.sizeAndPrice[activeIndex].price) }}</p>
                <p class="text-[14px] md:text-[16px] lg:text-[18px] text-[#D3D3D3] line-through">{{ formatPrice(product.sizeAndPrice[activeIndex].oldPrice) }}</p>
            </div>
            <div v-else>
                <p class="text-[#FF6347] text-[18px] md:text-[22px] lg:text-[26px] font-semibold mb-[20px]">{{ formatPrice(product.sizeAndPrice[activeIndex].price) }}</p>
            </div>
        </div>
        <div v-else>Loading</div>
        <div class="md:flex items-center gap-[12px] md:gap-[20px] mb-[12px] md:mb-[16px]">
            <span class="text-[14px] md:text-[16px] font-normal min-w-[100px] mb-[4px] md:mb-0">Kích thước:</span>
            <div class="flex items-center gap-[12px] md:gap-[20px]">
                <button @click="setActive(index)" :class="{'active' : index === activeIndex}" class="text-[14px] md:text-[16px] font-normal px-[10px] py-[4px] border-[1px] border-solid border-[#76A021] rounded-[4px]" v-for="(item, index) in product.sizeAndPrice" :key="index">{{ item.size }}</button>
            </div>
        </div>
        <div class="flex items-center gap-[20px] mb-[16px]">
            <span class="text-[14px] md:text-[16px] font-normal md:min-w-[100px]">Số lượng:</span>
            <div class="inline-flex items-center border-[1px] border-solid border-[#76a021] rounded-[20px] px-[6px] py-[4px]">
                <div @click="decreaseValue" class="w-[30px] h-[30px] text-[16px] flex items-center justify-center cursor-pointer" :class="{ '!text-[#dedede] !cursor-auto' : valueInput === 1}"><font-awesome-icon :icon="['fas', 'minus']" /></div>
                <input type="text" v-model="valueInput" min="1" :max="product.sizeAndPrice[activeIndex].inventory" class="text-center w-[50px] border-l-[1px] border-r-[1px] border-solid border-[#76a021]" />
                <div @click="increaseValue" class="w-[30px] h-[30px] text-[16px] flex items-center justify-center cursor-pointer" :class="{ '!text-[#dedede] !cursor-auto' : valueInput === product.sizeAndPrice[activeIndex].inventory}"><font-awesome-icon :icon="['fas', 'plus']" /></div>
            </div>
        </div>
        <div class="flex items-center gap-[12px] md:gap-[20px]" v-if="product.sizeAndPrice[activeIndex].inventory > 0">
            <button class="text-[14px] md:text-[16px] font-semibold text-[#76a021] px-[16px] py-[8px] border-[1px] border-solid border-[#76a021] rounded-[5px] hover:bg-[#76a021] hover:text-[white] transition-all duration-300 ease-linear" @click="handleAddCart">Thêm vào giỏ hàng</button>
            <button class="text-[14px] md:text-[16px] font-semibold bg-[#76a021] text-[white] px-[16px] py-[8px] border-[1px] border-solid border-[#76a021] rounded-[5px] hover:bg-white hover:text-[#76a021] transition-all duration-300 ease-linear" @click="handleBuyNow">Mua ngay</button>
        </div>
        <div v-else>
            <a href="tel:0974 23 7890" class="block text-center text-[14px] md:text-[16px] font-semibold bg-[#76a021] text-[white] px-[16px] py-[8px] border-[1px] border-solid border-[#76a021] rounded-[5px] hover:bg-white hover:text-[#76a021] transition-all duration-300 ease-linear">Liên hệ</a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            activeIndex: 0,
            valueInput: 1,
            message: {
                type: null,
                text: null,
            },
            value: {
                id: null,
                name: null,
                size: null,
                price: null
            },
        }
    },
    props: {
        product: Object,
    },
    components: {
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
        setActive(index) {
            this.activeIndex = index;
        },
        decreaseValue() {
            if (this.valueInput > 1) {
                this.valueInput--;
            }
        },
        increaseValue() {
            if (this.valueInput < this.product.sizeAndPrice[this.activeIndex].inventory) {
                this.valueInput++;
            }
        },
        handleAddCart() {
            if(this.product.sizeAndPrice[0].inventory > 0) {
                this.message = {'type': 'success', 'text': 'Đã thêm sản phẩm vào giỏ hàng'}
            } else {
                this.message = {'type': 'error', 'text': 'Sản phẩm tạm hết hàng'}
            }
            this.addMessage(this.message);
            console.log(this.addCart = { 'id': this.product.id, 'name': this.product.name, 'size': this.product.sizeAndPrice[0].size, 'price': this.product.sizeAndPrice[0].price});
        },
        handleBuyNow() {
            if(this.valueInput > this.product.sizeAndPrice[this.activeIndex].inventory) {
                this.message = {type: 'error', text: 'Kho hàng không đủ'}
            } else {
                console.log(
                    this.value = {
                        name: this.product.name,
                        size: this.product.sizeAndPrice[this.activeIndex].size,
                        price: this.product.sizeAndPrice[this.activeIndex].price * this.valueInput,
                        quantity: this.valueInput,
                    }
                )
                this.message = {type: 'success', text: 'Sản phẩm đã được thêm vào giỏ hàng.'}
            }
        }
    }
}
</script>

<style>
    button.active {
        background-color: #76A021;
        color: white;
    }
</style>