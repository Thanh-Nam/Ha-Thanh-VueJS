<template>
    <section class="cate">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-[#76A021]">Danh mục sản phẩm</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px] md:gap-[12px] lg:gap-[16px]">
                <div class="cate-item relative h-[270px] flex items-end cursor-pointer" v-for="(item, index) in listCate" :key="index">
                    <a :href="'#' + convertToId(item.cateName)" @click="sendHandleScroll" v-smooth-scroll="{ duration: 1000,  updateHistory: false}" class="cate-img absolute top-0 left-0 h-full w-full z-0 overflow-hidden"><img src="../../assets/img/chan-ga-khach-san.jpg" alt="" class=" h-full w-full object-cover"></a>
                    <div class="relative z-[2] px-[12px] py-[16px] w-full">
                        <router-link :to="{ name: 'categoryChild', params: { cateName: convertToId(item.cateName) } }" class="title-item-cate font-bold lg:text-[20px] text-[18px] mb-[4px] text-white relative z-[1]">{{ item.cateName }}</router-link>
                        <p class="font-bold text-[#FFD700] relative z-[1]">{{ item.listProduct.length }} sản phẩm</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'compo-cate',
    data() {
        return {
            
        }
    },
    props: {
        listCate: Object,
    },
    methods: {
        convertToId(name) {
            return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
        },
        sendHandleScroll() {
            this.$emit('handleScroll');
        }
    }
}
</script>

<style>
    .cate {
        background: #f9f9f9;
    }
    .cate-item::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
        pointer-events: none;
    }
    .cate-img img {
        transition: all 0.3s linear;
    }
    .cate-item:hover .cate-img img {
        transform: scale(1.1);
    }
    .title-item-cate {
        transition: all 0.3s linear;
    }
    .title-item-cate:hover {
        color: #FFD700;
    }
</style>