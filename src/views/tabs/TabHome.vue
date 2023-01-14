<script setup lang="ts">
import { computed, } from "vue";
import { useRoute } from 'vue-router'
import { IonContent, IonPage } from "@ionic/vue";
import
{
    onIonViewWillEnter, onIonViewDidEnter,
    onIonViewWillLeave, onIonViewDidLeave
} from '@ionic/vue';

import AppHeader from '@/components/AppHeader.vue';

const route = useRoute()

const title = computed(() => route.meta.pageName as string)

onIonViewDidEnter(() =>
{
    console.log('Home page did enter home');
});

onIonViewDidLeave(() =>
{
    console.log('Home page did leave  home');
});

onIonViewWillEnter(() =>
{
    console.log('Home page will enter  home');
});

onIonViewWillLeave(() =>
{
    console.log('Home page will leave  home');
});
</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
            <div class="tw-m-1">
                <p v-for="(item, index) in 100" :key="index" class="tw-mb-1">
                    {{ item }}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste repellat nesciunt, tempore placeat
                    impedit fuga
                    adipisci possimus atque optio neque perspiciatis magni quod, saepe aliquid aut iure ea nisi odio.
                </p>
            </div>
        </ion-content>
    </ion-page>
</template>