<template>
    <footer class="footer">
        <div class="container px-[8px] md:px-[16px] 2xl:px-0 2xl:pb-[80px] lg:pb-[60px] md:pb-[40px] pb-[30px] 2xl:pt-[60px] lg:pt-[40px] md:pt-[30px] pt-[20px]">
            <div class="flex items-center justify-center gap-[12px] flex-col pb-[12px] md:pb-[16px] lg:pb-[20px] border-b-[1px] border-solid border-white">
                <img src="../../assets/img/Logo-footer.png" alt="Err" class="max-w-[300px]">
                <div class="text-center">
                    <p class="uppercase md:text-[20px] lg:text-[24px] font-semibold text-white mb-[8px]">Công ty TNHH chăn ga gối đệm Hà Thành</p>
                    <p class="text-[14px] md:text-[16px] lg:text-[18px] italic text-[#FFD700] capitalize">Chính hãng - Uy tín - Giá cả phù hợp</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px] lg:gap-[30px] pt-[12px] md:pt-[16px] lg:pt-[20px]">
                <div class="">
                    <h3 class="title-footer relative uppercase md:text-[18px] lg:text-[20px] text-white font-bold pb-[8px] md:pb-[12px]">Thông tin liên hệ</h3>
                    <ul class="pt-[16px] md:pt-[20px]">
                        <li class="text-[14px] text-white font-normal mb-[4px]"><span class="font-semibold">Địa chỉ: </span>Thôn Ninh Xá, Ninh Sở, Thường Tín, Hà Nội</li>
                        <li class="text-[14px] text-white font-normal mb-[4px]"><span class="font-semibold">Hotline: </span>0243 6825426</li>
                        <li class="text-[14px] text-white font-normal"><span class="font-semibold">Email: </span>hathanhijsc@gmail.com</li>
                    </ul>
                </div>
                <div class="">
                    <h3 class="title-footer relative uppercase md:text-[18px] lg:text-[20px] text-white font-bold pb-[8px] md:pb-[12px]">Danh mục sản phẩm</h3>
                    <ul class="pt-[16px] md:pt-[20px]">
                        <li class="uppercase text-[14px] text-white font-semibold mb-[4px]">Chăn ga cao cấp khách sạn</li>
                        <li class="uppercase text-[14px] text-white font-semibold mb-[4px]">Chăn ga gia đình</li>
                        <li class="uppercase text-[14px] text-white font-semibold">nệm</li>
                    </ul>
                </div>
                <div class="">
                    <h3 class="title-footer relative uppercase md:text-[18px] lg:text-[20px] text-white font-bold pb-[8px] md:pb-[12px]">Chính sách</h3>
                    <ul class="pt-[16px] md:pt-[20px]">
                        <li class="text-[14px] text-white font-normal mb-[4px]">Chính sách giao hàng</li>
                    </ul>
                </div>
                <div class="">
                    <h3 class="title-footer relative uppercase md:text-[18px] lg:text-[20px] text-white font-bold pb-[8px] md:pb-[12px]">Fanpage</h3>
                    <div class="pt-[16px] md:pt-[20px]">
                        <!-- <iframe src="https://www.facebook.com/Changagoidem2021/?ref=embed_page" frameborder="0" class="w-full"></iframe> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright py-[8px] relative text-white text-center">
            @Copyright 2024 by G9 Myl0v3
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
    .footer {
        background: #76A021;
    }
    .title-footer::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 80px;
        background: #fff;
    }
    .copyright::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, #aaaaaa, white, #aaaaaa);
    }
    
</style>