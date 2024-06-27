<template>
    <compo-header />
    <compo-banner />
    <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:py-[80px] lg:py-[60px] md:py-[40px] py-[30px] md:grid grid-cols-4 md:gap-[10px] lg:gap-[20px]">
        <compo-content class="col-span-3" />
        <compo-nav class="col-span-1 hidden md:block" />
    </div>
    <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoContent from '../components/newsDetail/compoContent.vue';
import compoNav from '../components/product/compoNav.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
export default {
    components: {
        compoHeader,
        compoBanner,
        compoContent,
        compoNav,
        compoFooter
    }
}
</script>

<style>

</style>