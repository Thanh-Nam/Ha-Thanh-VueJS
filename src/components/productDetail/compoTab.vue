<template>
    <div class="border-[1px] border-solid border-[#e7e7e7] rounded-[4px] overflow-hidden">
        <div class="tab-title-wrap bg-[#e7e7e7] flex gap-[4px]">
            <button @click="tabActive = 0" class="uppercase text-[14px] md:text-[16px] font-semibold px-[8px] md:px-[16px] py-[4px] md:py-[8px] border-t-[4px] border-solid border-transparent transition-all duration-300 ease-linear hover:text-[#76a021] hover:bg-white hover:border-[#76a021]" :class="{'active' : tabActive === 0}">Thông tin chi tiết</button>
            <button @click="tabActive = 1" class="uppercase text-[14px] md:text-[16px] font-semibold px-[8px] md:px-[16px] py-[4px] md:py-[8px] border-t-[4px] border-solid border-transparent transition-all duration-300 ease-linear hover:text-[#76a021] hover:bg-white hover:border-[#76a021]" :class="{'active' : tabActive === 1}">Mô tả sản phẩm</button>
        </div>
        <div class="tab-content-wrap">
            <div class="tab-content px-[10px] py-[16px]" v-show="tabActive === 0">{{ detail }}</div>
            <div class="tab-content px-[10px] py-[16px]" v-show="tabActive === 1">{{ proDes }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabActive: 0,
        }
    },
    props: {
        detail: String,
        proDes: String
    }
}
</script>

<style>
    .tab-title-wrap .active {
        border-color: #76A021;
        color: #76A021;
        background: white;
    }
</style>