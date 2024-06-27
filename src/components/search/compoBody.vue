<template>
    <section>
        <div class="container">
            <p class="text-[#4D5F7A] font-normal leading-[137.5%]">Tìm kiếm với từ khoá: <span class="text-[#225DAB] font-bold">{{ $route.query.q }}</span> </p>
            <compo-product :listCate="listCate" />
        </div>
    </section>
</template>

<script>
import compoProduct from '../product/compoProduct.vue';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            allCate: [],
            listCate: [],
        }
    },
    computed: {
        allCate() {
            return this.getAllProducts;
        },
        listCate() {
            return this.allCate.length > 0 ? Object.values({ ...this.allCate }) : [];
        }
    },
    async created() {
        await this.$store.dispatch('fetchCategories');
    },
    components: {
        compoProduct
    }
}
</script>

<style>

</style>