<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px] md:gap-[30px]">
        <form action="" class="form-contact lg:p-[20px] md:p-[16px] p-[12px] bg-white rounded-[12px]">
            <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-[#76a021] text-center mb-[12px] md:mb-[18px] lg:mb-[24px]">Liên hệ với chúng tôi</h3>
            <input type="text" class="text-[14px] md:text-[16px] text-[#76a021] px-[10px] py-[6px] outline-none border-[1px] border-solid border-[#76a021] rounded-[12px] w-full mb-[8px] md:mb-[12px]" placeholder="Họ và tên...">
            <input type="text" class="text-[14px] md:text-[16px] text-[#76a021] px-[10px] py-[6px] outline-none border-[1px] border-solid border-[#76a021] rounded-[12px] w-full mb-[8px] md:mb-[12px]" placeholder="Số điện thoại...">
            <input type="text" class="text-[14px] md:text-[16px] text-[#76a021] px-[10px] py-[6px] outline-none border-[1px] border-solid border-[#76a021] rounded-[12px] w-full mb-[8px] md:mb-[12px]" placeholder="Email...">
            <textarea rows="4" class="text-[14px] md:text-[16px] text-[#76a021] px-[10px] py-[6px] outline-none border-[1px] border-solid border-[#76a021] rounded-[12px] w-full mb-[8px] md:mb-[12px]" placeholder="Nhập nội dung..."></textarea>
            <div class="flex justify-center">
                <button class="button-hover relative items-center f-semibold xl:text-[18px] xl:leading-[24px] md:px-[12px] px-[8px] xl:px-[16px] md:py-[8px] py-[4px] bg-white cursor-pointer  text-[14px] lg:text-[16px] text-[#76A021]" type="submit"><span class="relative z-[1]">Gửi thông tin</span></button>
            </div>
        </form>
        <div>
            <iframe class="w-full h-[300px] md:h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29818.829885860767!2d105.865917241406!3d20.89808340875954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b1f03eef35ab%3A0xb735ecc0b73f8f5b!2zTmluaCBT4bufLCBUaMaw4budbmcgVMOtbiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703130904302!5m2!1svi!2s"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .form-contact {
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
</style>