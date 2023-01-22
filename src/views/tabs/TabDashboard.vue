<script setup lang="ts">
import { computed, } from "vue";
import { useRouter } from 'vue-router'

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from "@ionic/vue";

import
{
    onIonViewWillEnter, onIonViewDidEnter,
    onIonViewWillLeave, onIonViewDidLeave
} from '@ionic/vue';

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()


const title = computed(() => router.currentRoute.value.meta.pageName as string)

const detailIncome = async () =>
{
    await router.push({ name: 'DashboardIncome' })

}

const detailOutcome = async () =>
{
    await router.push({ name: 'DashboardOutcome' })

}
onIonViewDidEnter(() =>
{
    // console.log('Home page did enter home');
});

onIonViewDidLeave(() =>
{
    // console.log('Home page did leave  home');
});

onIonViewWillEnter(() =>
{
    // console.log('Home page will enter  home');
});

onIonViewWillLeave(() =>
{
    // console.log('Home page will leave  home');
});
</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
            <div class="tw-mx-2">
                <ion-row class="tw-mt-2">
                    <ion-col size="12" v-for="(item, index) in ['Pemasukan', 'Pengeluaran']" :key="index">
                        <ion-card color="primary" class="tw-m-0 tw-mb-2 tw-cursor-pointer tw-bg-gradient-to-r tw-from-blue-500 tw-to-pink-400" @click="detailOutcome">
                            <ion-card-header>
                                <ion-card-subtitle>{{ item }} / 20-jan-2023</ion-card-subtitle>
                            </ion-card-header>
                            <ion-card-content>
                                Rp. 2000,0000
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </div>
        </ion-content>
    </ion-page>
</template>