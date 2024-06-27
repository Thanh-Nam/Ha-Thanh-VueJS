<template>
    <div v-if="messages" class="message-wrap">
        <transition-group name="message">
            <div class="message" v-for="(item, index) in listMessages" :key="index">
                <div class="success flex items-center gap-[8px] bg-[#1fd655] rounded-[12px] px-[16px] py-[8px]" v-if="item.type === 'success'">
                    <font-awesome-icon :icon="['fas', 'check']" class="w-[18px] h-[18px] p-[8px] flex items-center justify-center rounded-full bg-white text-[#1fd655]" />
                    <span class="font-semibold text-white">{{ item.text }}</span>
                </div>
                <div class="error flex items-center gap-[8px] bg-[#ff0000] rounded-[12px] px-[16px] py-[8px]" v-if="item.type === 'error'">
                    <font-awesome-icon :icon="['fas', 'xmark']" class="w-[18px] h-[18px] p-[8px] flex items-center justify-center rounded-full bg-white text-[#ff0000]" />
                    <span class="font-semibold text-white">{{ item.text }}</span>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['messages']),
        listMessages() {
            return this.messages.slice().reverse();
        }
    },
}
</script>

<style>
    .message-wrap {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 30;
        width: fit-content;
        height: fit-content;
        display: flex;
        flex-direction: column-reverse;
    }
    .message {
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        transition: transform 0.3s ease;
        animation: fadeIn .5s linear;
        margin-top: 10px;
    }
    @keyframes fadeIn {
        0% {
            transform: translateY(-150%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>