<template>
    <section class="about">
        <div
            class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px] lg:flex items-center gap-[32px] text-center lg:text-left">
            <div class="about-text lg:w-[40%] mb-[26px] md:mb-[40px] lg:mb-0">
                <div class="mb-[12px]"><img src="../../assets/img/Logo.png" alt="" class="w-[50%] mx-auto"></div>
                <h3 class="about-title mb-[12px] text-[24px] md:text-[28px] lg:text-[36px] font-semibold text-center">
                    Công ty TNHH <span class="text-[#76A021] font-semibold">Hà Thành</span>
                </h3>
                <p class="about-content text-justify leading-[137.5%] text-[#4D5F7A] f-normal">
                    <span class="font-semibold">Công ty TNHH Chăn Ga Gối Đệm Hà Thành</span> hoạt động trong lĩnh vực sản xuất bán các mặt hàng: <span class="font-semibold">Chăn ga gối đệm</span> dành cho khách sạn 3* đến 5*, resort, nhà nghỉ, gia đình,... <br><br>Với tiêu trí mang các sản phẩm cao cấp - chất lượng - giá rẻ của thương hiệu <span class="font-semibold">Hà Thành</span> đến mọi người.
                </p>
                <compo-button :titleButton="titleButton" :srcButton="srcButton" class="hidden lg:mt-[40px] md:mt-[24px] mt-[8px]" :class="{ '!inline-flex': isHomePage }" />
            </div>
            <div
                class="about-img lg:w-[50%] ml-[12px] md:ml-[23px] inline-block">
                <img src="../../assets/img/Logo.png" alt=""/>
            </div>
        </div>
    </section>
</template>

<script>
import compoButton from '../compoButton.vue'
export default {
    name: "compo-about",
    data() {
        return {
            titleButton: "Về chúng tôi",
            srcButton: "about",
            isHomePage: window.location.pathname === '/',
        }
    },
    components: {
        compoButton,
    }
};
</script>
