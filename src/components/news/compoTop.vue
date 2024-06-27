<template>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-[12px] gap-[8px]">
        <div class="md:col-span-2 relative" v-for="(item, index) in bigItem" :key="index">
            <router-link :to="{name: 'newsDetail', params: {id: item.id}}" class="news-img block overflow-hidden w-full h-full"><img :src="item.image" alt="" class="w-full h-full object-cover"></router-link>
            <div class="p-[8px] md:p-[12px] lg:p-[16px] absolute bottom-0 left-0 w-full">
                <div class="absolute top-0 left-0 h-full w-full bg-black/30 z-0"></div>
                <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                    class="text-[16px] md:text-[18px] lg:text-[20px] font-semibold line-clamp-2 hover:text-[#76A021] transition-all duration-300 ease-linear mb-[8px] text-white relative z-[1]">
                    {{ item.title }}
                </router-link>
                <div class="md:flex items-center gap-[12px] text-white relative z-[1] hidden">
                    <p class="text-[14px] text-justify line-clamp-3">{{ item.des }}</p>
                </div>
                <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                    class="button-new-detail text-[12px] font-normal italic md:mt-[8px] inline-block text-white relative z-[1]">
                    Xem chi tiết
                    <font-awesome-icon :icon="['fas', 'angles-right']"
                        class="ml-[2px] text-[10px] transition-all duration-300 ease-linear" />
                </router-link>
            </div>
        </div>
        <div class="md:col-span-1 flex md:flex-col gap-[8px]">
            <div class="border-[1px] border-solid border-[#76A021] rounded-[8px] overflow-hidden w-[50%] md:w-full" v-for="(item, index) in smallItem" :key="index">
                <router-link :to="{name: 'newsDetail', params: {id: item.id}}" class="news-img w-full relative pb-[60%] overflow-hidden block">
                    <img :src="item.image" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
                </router-link>
                <div class="p-[4px] md:p-[6px] lg:p-[10px]">
                    <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                        class="text-[16px] font-semibold line-clamp-2 hover:text-[#76A021] transition-all duration-300 ease-linear">
                        {{ item.title }}
                    </router-link>
                    <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                        class="button-new-detail text-[12px] text-[#76A021] font-normal italic inline-block">
                        Xem chi tiết
                        <font-awesome-icon :icon="['fas', 'angles-right']"
                            class="ml-[2px] text-[10px] transition-all duration-300 ease-linear" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        topList: Array
    },
    computed: {
        bigItem() {
            return this.topList.slice(0, 1);
        },
        smallItem() {
            return this.topList.slice(1);
        }
    }
}
</script>

<style>

</style>