<template>
    <section class="why-choose">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
            <h3 class="text-[24px] md:text-[28px] lg:text-[36px] font-semibold lg:mb-[30px] md:mb-[20px] mb-[16px] text-center text-[#76A021]">Tại sao chọn chúng tôi</h3>
            <div class="why-wrap max-w-[800px] mx-auto flex flex-col gap-[12px]">
                <div class="why-item  p-[10px] border-[1px] border-solid border-[#76A021] rounded-[12px]" v-for="(item, index) in listWhy" :key="index">
                    <div class="flex items-center justify-between gap-[10px] cursor-pointer" @click="toggleWhy(index)">
                        <p class="text-[16px] font-medium">{{ item.title }}</p>
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </div>
                    <p class="text-[14px] italic mt-[12px]" v-show="visibleItems[index]">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isVisible : false,
            listWhy: [
                {
                    title: 'text 1',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at illum dolor laborum aliquam officiis aut possimus dolores quibusdam quam, corporis ex modi error mollitia sint eius asperiores nihil voluptatum?'
                },
                {
                    title: 'text 2',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at illum dolor laborum aliquam officiis aut possimus dolores quibusdam quam, corporis ex modi error mollitia sint eius asperiores nihil voluptatum?'
                },
                {
                    title: 'text 3',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at illum dolor laborum aliquam officiis aut possimus dolores quibusdam quam, corporis ex modi error mollitia sint eius asperiores nihil voluptatum?'
                },
            ],
            visibleItems: []
        }
    },
    methods: {
        toggleWhy(index) {
            this.visibleItems = this.visibleItems.map((item, i) => i === index ? !item : false);
            console.log(1);
        },
        created() {
            this.visibleItems = Array(this.listWhy.length).fill(false);
        },
    }
}
</script>

<style>

</style>