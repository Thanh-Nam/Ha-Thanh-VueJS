<template>
    <compo-header />
    <compo-banner :title="title" :src="src" />
    <compo-body />
    <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoBody from '../components/search/compoBody.vue';
import compoFooter from '../components/layouts/compoFooter.vue';
export default {
    data() {
        return {
            title: 'Tìm kiếm',
            src: '../../src/assets/img/banner.webp'
        }
    },
    components: {
        compoHeader,
        compoBanner,
        compoBody,
        compoFooter
    }
}
</script>