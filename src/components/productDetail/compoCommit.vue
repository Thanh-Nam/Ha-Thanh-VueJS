<template>
    <div class="commit grid md:grid-cols-4 grid-cols-2  xl:block lg:gap-[10px] gap-[8px]">
        <div v-for="(item, index) in commit" :key="index" class="flex flex-col xl:flex-row items-center gap-[10px] xl:mb-[10px] last:mb-0">
            <div class="w-[40px] h-[40px] flex items-center justify-center bg-[#76A021] rounded-[10px]">
                <img :src="item.image" alt="" class="">
            </div>
            <p class="text-[16px] font-normal text-center xl:text-left">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        commit: Array,
    }
}
</script>

<style>
    .commit {
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        height: fit-content;
    }
</style>