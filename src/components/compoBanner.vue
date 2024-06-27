<template>
    <section class="compo-banner">
        <div><img :src="src" alt="" class="w-full h-full object-cover"></div>
        <div class="p-[8px] bg-[#dedede]">
            <div class="container">
                <div class="breadcrumb flex items-center">
                    <router-link to="/" class="flex md:mr-[8px] mr-[4px]">
                        <span class="font-normal leading-[137.5%] mr-[4px] hover:text-[#76A021] transition-all duration-300 ease-linear">Trang chủ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700">
                            <path d="M13 17L18 12L13 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 17L11 12L6 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                    <span class="text-[#76A021] font-normal leading-[137.5%]">{{ title }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'compo-banner',
    props: {
        title: String,
        src: String,
    }
}
</script>