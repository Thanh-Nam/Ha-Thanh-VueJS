<template>
  <compo-header />
  <compo-banner :title="title" :src="src" />
  <compo-about />
  <compo-history />
  <compo-why-choose />
  <compo-statis />
  <compo-media />
  <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/compoBanner.vue';
import compoAbout from '../components/home/compoAbout.vue';
import compoHistory from '../components/about/compoHistory.vue';
import compoWhyChoose from '../components/about/compoWhyChoose.vue';
import compoStatis from '../components/home/compoStatis.vue';
import compoMedia from '../components/home/compoMedia.vue';
import compoFooter from '../components/layouts/compoFooter.vue';

export default {
  data() {
    return {
      title: 'Giới thiệu',
      src: '../../src/assets/img/banner.webp'
    }
  },
  components: {
    compoHeader,
    compoBanner,
    compoAbout,
    compoHistory,
    compoWhyChoose,
    compoStatis,
    compoMedia,
    compoFooter
  }
}
</script>

<style>

</style>