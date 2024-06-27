<template>
    <section>
        <div class="w-full h-[100vh] flex items-center justify-center">
            <div class="text-center">
                <h3 class="text-[48px] md:text-[60px] lg:text-[80px] font-semibold leading-[100%]">404</h3>
                <p class="text-[20px] md:text-[24px] lg:text-[32px] mb-[20px] md:mb-[30px] lg:mb-[40px]">Page note found</p>
                <compo-button :titleButton="titleButton" :srcButton="srcButton" />
            </div>
        </div>
    </section>
</template>

<script>
import compoButton from '../components/compoButton.vue'
export default {
    data() {
        return {
            titleButton: 'Quay về trang chủ',
            srcButton: ''
        }
    },
    components: {
        compoButton
    }
}
</script>