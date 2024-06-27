<template>
    <router-link :to="'/' + srcButton"
        class="button-hover relative items-center f-semibold xl:text-[18px] xl:leading-[24px] md:px-[14px] px-[8px] xl:px-[20px] md:py-[10px] py-[5px] bg-white cursor-pointer  text-[14px] lg:text-[16px] text-[#76A021]">
        <span class="relative z-[1] text-[#76A021] mr-[8px]">{{ titleButton }}</span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </router-link>
</template>

<script>
export default {
    name: 'compo-button',
    props: {
        titleButton: String,
        srcButton: String,
    }
}
</script>

<style>
    .button-hover {
        border: 2px solid #76A021;
        transition: all .3s linear;
    }
    .button-hover svg {
        transition: all .5s linear;
        position: relative;
        z-index: 1;
    }
    .button-hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #76A021;
        transition: all .3s linear;
        z-index: 0;
    }
    .button-hover:hover::before {
        width: 100%;
    }
    .button-hover:hover span{
        color: white;
    }
    .button-hover:hover svg {
        color: white;
        transform: translateX(6px);
    }
</style>