<template>
    <header id="header" class="sticky top-0 z-30 shadow-2xl">
        <div class="bg-[#76A021] hidden lg:block">
            <div class="container flex items-center justify-between py-[8px] px-[8px] md:px-[16px] xl:px-0">
                <a href="tel:0974237890" class="text-white leading-[137.5%] font-normal">Hotline: <span class="font-bold">0974 23 7890</span></a>
                <form class="relative" @submit.prevent="handleSearch">
                    <input type="text" v-model="searchQuery" class="w-[400px] bg-transparent border-[1px] border-solid border-white rounded-[32px] px-[12px] py-[6px] outline-none text-white text-[14px] placeholder:text-[#f5f5f5]" placeholder="Nhập từ khoá tìm kiếm...">
                    <button type="submit" class="absolute top-[50%] translate-y-[-50%] right-[12px] text-white"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
                </form>
                <div class="flex items-center gap-[16px]">
                    <button class="login text-[14px] font-bold px-[16px] py-[8px] bg-white transition-all duration-300 ease-linear hover:bg-[#FFD700]">Đăng nhập</button>
                    <button class="register text-[14px] font-bold px-[16px] py-[8px] bg-[#FFD700] transition-all duration-300 ease-linear hover:bg-white">Đăng ký</button>
                </div>
            </div>
        </div>
        <div class="bg-[#fff]">
            <div class="container flex items-center justify-between py-[8px] px-[8px] md:px-[16px] xl:px-0">
                <div class="lg:hidden">
                    <button class="text-[24px]" @click="handleOpenMenu"><font-awesome-icon :icon="['fas', 'bars']" /></button>
                    <div class="overlay fixed top-0 left-0 right-0 bottom-0 bg-black/30 translate-x-[100%] opacity-0 ease-linear duration-300 transition-all z-[19]" :class="{'!opacity-100 !translate-x-0' : isMenu}" @click="handleCloseMenu"></div>
                    <div class="menu-mobile fixed top-0 left-0 bottom-0 w-[320px] bg-white z-20 px-[16px] py-[42px] translate-x-[-100%] opacity-0 ease-linear duration-300 transition-all" :class="{'!opacity-100 !translate-x-0' : isMenu}">
                        <button class="close-menu-mobile text-[24px] px-[12px] py-[9px] text-[#76A021] absolute top-0 right-0 flex" @click="handleCloseMenu"><font-awesome-icon :icon="['fas', 'xmark']" /></button> 
                        <div class="flex items-start justify-center mb-[12px]">
                            <img src="../../assets/img/Logo.png" alt="Logo" class="max-w-[100px]">
                        </div>
                        <div class="relative mb-[12px]">
                            <input type="text" class="bg-transparent w-full border-[1px] border-solid border-[#76A021] rounded-[32px] px-[12px] py-[6px] outline-none text-[#76A021] text-[14px] placeholder:text-[#76A021]" placeholder="Nhập từ khoá tìm kiếm...">
                            <button class="absolute top-[50%] translate-y-[-50%] right-[12px] text-[#76A021]"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
                        </div>
                        <ul>
                            <li :class="{ 'menu-active': isActive('/') }"><router-link to="/" >Trang chủ</router-link></li>
                            <li :class="{ 'menu-active': isActive('/about') }"><router-link :to="{name : 'about'}" >Giới thiệu</router-link></li>
                            <li :class="{ 'menu-active': isActive('/profile') }"><router-link to="/" >Hồ sơ năng lực</router-link></li>
                            <li :class="{ 'menu-active': isActive('/product') || isActive('/product/') }"><router-link to="/product" >Sản phẩm</router-link></li>
                            <li :class="{ 'menu-active': isActive('/news') }"><router-link :to="{name : 'news'}" >Tin tức</router-link></li>
                            <li :class="{ 'menu-active': isActive('/contact') }"><router-link to="/contact" >Liên hệ</router-link></li>
                        </ul>
                        <div class="flex items-center justify-center gap-[16px] mt-[12px]">
                            <button class="login text-[14px] font-bold px-[16px] py-[8px] bg-[#76A021] text-white">Đăng nhập</button>
                            <button class="register text-[14px] font-bold px-[16px] py-[8px] bg-[#FFD700]">Đăng ký</button>
                        </div>
                    </div>
                </div>
                <router-link to="/" class="inline-block max-w-[74px]"><img src="../../assets/img/Logo.png" alt="Logo"></router-link>
                <div class="menu hidden lg:block">
                    <ul>
                        <li :class="{ 'menu-active': isActive('/') }"><router-link to="/" >Trang chủ</router-link></li>
                        <li :class="{ 'menu-active': isActive('/about') }"><router-link :to="{name : 'about'}" >Giới thiệu</router-link></li>
                        <li :class="{ 'menu-active': isActive('/profile') }"><router-link to="/" >Hồ sơ năng lực</router-link></li>
                        <li :class="{ 'menu-active': isActive('/product') }"><router-link to="/product" >Sản phẩm</router-link></li>
                        <li :class="{ 'menu-active': isActive('/news') }"><router-link :to="{name: 'news'}" >Tin tức</router-link></li>
                        <li :class="{ 'menu-active': isActive('/contact') }"><router-link to="/contact" >Liên hệ</router-link></li>
                    </ul>
                </div>
                <div class="relative cursor-pointer">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-[20px]"/>
                    <p class="absolute top-[-12px] left-[-12px] w-[24px] h-[24px] bg-[#76A021] rounded-full text-white flex items-center justify-center">0</p>
                </div>
            </div>
        </div>
        <a href="#header" v-smooth-scroll="{ duration: 1000,  updateHistory: false}" v-if="showbtt" class="back-to-top fixed z-[20] bottom-[30px] right-[20px] text-[24px] bg-white text-[#FFD700] w-[40px] h-[40px] flex items-center justify-center rounded-full border-[1px] border-solid border-[#FFD700]"><font-awesome-icon :icon="['fas', 'arrow-up']" /></a>
    </header>
</template>

<script>

export default {
    name: 'compo-header',
    data() {
        return {
            isMenu: false,
            showbtt: false,
            searchQuery: ''
        }
    },
    methods: {
        handleOpenMenu() {
            this.isMenu = true;
        },
        handleCloseMenu() {
            this.isMenu = false;
        },
        isActive(route) {
        return this.$route.path === route;
        },
        scrollToThisHeader() {
            this.$refs.targetHeader.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        },
        handleScroll() {
            if (window.scrollY > 300) {
                this.showbtt = true;
            } else {
                this.showbtt = false;
            }
        },
        handleSearch() {
            const query = this.searchQuery.toLowerCase();
            if (query === "") {
            this.$router.push({ name: 'searchResults', query: {q:''} });
            } else {
            this.$router.push({ name: 'searchResults', query: { q: query } });
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
}
</script>

<style>
    .login, .register {
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    .menu ul {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .menu ul li {
        padding: 8px 12px;
        transition: all .3s linear;
        cursor: pointer;
    }
    .menu ul li a {
        text-transform: uppercase;
        font-weight: 700;
        transition: all .3s linear;
    }
    .menu ul li:hover {
        background: #76A021;
    }
    .menu ul li:hover a {
        color: white;
    }
    .menu .menu-active {
        background: #76A021;
    }
    .menu .menu-active a {
        color: white;
    }
    .menu-mobile {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    .menu-mobile ul li {
        padding: 8px 0;
        border-bottom: 1px solid #76A021;
    }
    .menu-mobile ul li:last-child {
        border-bottom: none;
    }
    .menu-mobile ul li a {
        font-size: 14px;
    }
    .menu-mobile .menu-active a {
        color: #76A021;
    }
    .back-to-top {
        cursor: pointer;
        animation: scrollAnimation 0.5s forwards; 
    }

    @keyframes scrollAnimation {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>