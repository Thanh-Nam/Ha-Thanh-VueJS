<template>
  <compo-header />
  <compo-banner />
  <compo-cate v-if="listCate.length > 0" :listCate="listCate" @handleScroll="handleScrollRequest" />
  <compo-about />
  <compo-statis />
  <compo-list-cate v-if="listCate.length > 0" :listCate="listCate" :scrollRequested="scrollRequested" />
  <compo-feedback />
  <compo-media />
  <compo-news />
  <compo-message />
  <compo-footer />
</template>

<script>
import compoHeader from '../components/layouts/compoHeader.vue';
import compoBanner from '../components/home/compoBanner.vue';
import compoCate from '../components/home/compoCate.vue';
import compoAbout from '../components/home/compoAbout.vue';
import compoStatis from '../components/home/compoStatis.vue';
import compoListCate from '../components/home/compoListCate.vue';
import compoFeedback from '../components/home/compoFeedback.vue';
import compoMedia from '../components/home/compoMedia.vue';
import compoNews from '../components/home/compoNews.vue';
import compoMessage from '../components/compoMessage.vue'
import compoFooter from '../components/layouts/compoFooter.vue';
export default {
  name: 'home',
  data() {
    return {
      listCate: [],
      scrollRequested: false
    }
  },
  methods: {
    handleScrollRequest() {
      this.scrollRequested = true;
    },
  },
  components: {
    compoHeader,
    compoBanner,
    compoAbout,
    compoStatis,
    compoCate,
    compoListCate,
    compoFeedback,
    compoMedia,
    compoNews,
    compoMessage,
    compoFooter
  },
  async created() {
    await this.$store.dispatch('fetchCategories').then(() => {
      if(this.$store.state.categories.length > 0) {
        this.listCate = this.$store.state.categories;
      }
    });
  },
}
</script>