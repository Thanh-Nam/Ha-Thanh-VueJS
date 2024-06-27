<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]">
        <div class="flex gap-[8px] md:gap-[12px] border-[1px] border-solid border-[#76A021] rounded-[8px] overflow-hidden p-[8px] md:p-[12px] lg:p-[16px]" v-for="item in botList" :key="item.id">
            <router-link :to="{name: 'newsDetail', params: {id: item.id}}" class="news-img relative pb-[30%] overflow-hidden block w-[45%] md:w-[30%] shrink-0">
                    <img :src="item.image" alt="" class="absolute top-0 left-0 w-full h-full object-cover">
            </router-link>
            <div class="">
                <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                    class="text-[16px] font-semibold line-clamp-2 hover:text-[#76A021] transition-all duration-300 ease-linear mb-[8px]">
                    {{ item.title }}
                </router-link>
                <div class="md:flex items-center gap-[12px]">
                    <p class="text-[14px] text-justify line-clamp-3">{{ item.des }}</p>
                </div>
                <router-link :to="{name: 'newsDetail', params: {id: item.id}}"
                    class="button-new-detail text-[12px] text-[#76A021] font-normal italic mt-[8px] inline-block">
                    Xem chi tiết
                    <font-awesome-icon :icon="['fas', 'angles-right']"
                        class="ml-[2px] text-[10px] transition-all duration-300 ease-linear" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        botList: Array
    }
}
</script>

<style></style>