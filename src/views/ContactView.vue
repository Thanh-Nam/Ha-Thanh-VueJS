<template>
    <compo-header />
    <compo-banner :src="src" :title="title" />
    <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px]">
        <compo-info />
        <compo-form class="mt-[10px] md:mt-[20px] lg:mt-[30px]"/>
    </div>
    <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoInfo from '../components/contact/compoInfo.vue';
import compoForm from '../components/contact/compoForm.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
export default {
    data() {
        return {
            title: 'Liên hệ',
            src: '../../src/assets/img/banner.webp'
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoInfo,
        compoForm,
        compoFooter
    }
}
</script>

<style>

</style>