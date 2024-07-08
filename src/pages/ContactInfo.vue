<script setup>
import { defineComponent, reactive } from 'vue';

defineComponent({
    name: 'ContactInfo',
});

defineProps({
    header: String,
});

const data = reactive([
    {
        icon: 'mdi-cellphone-sound',
        title: 'Phone',
        value: '+ 959 671680754',
        href: 'tel:+ 959 671680754',
        target: null,
    },
    {
        icon: 'mdi-message-text',
        title: 'Telegram',
        value: '@nwayzin_01',
        href: 'https://t.me/nwayzin_01',
        target: '_blank',
    },
    {
        icon: 'mdi-gmail',
        title: 'Gmail',
        value: 'nwayzinwin30@gmail.com',
        href: 'mailto:nwayzinwin30@gmail.com',
        target: null,
    },
    {
        icon: 'mdi-github',
        title: 'GitHub',
        value: 'NwayZinWin',
        href: 'https://github.com/NwayZinWin',
        target: '_blank',
    },
   
]);
</script>

<template>
    <div class="contact-info">
        <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">{{ header }}</h5>
        <div class="contact-info__item mt-3" v-for="(item, i) in data" :key="i">
            <div class="contact-info__icon">
                <v-icon size="x-large">{{ item.icon }}</v-icon>
            </div>
            <div class="contact-info__content">
                <span class="text-uppercase text-button">{{ item.title }}</span>
                <a :href="item.href" :target="item.target">{{ item.value }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.contact-info__item {
    display: flex;
    align-items: flex-end;
}

.contact-info__content {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>
