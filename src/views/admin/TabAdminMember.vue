<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, reactive } from "vue";

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonCard, IonCardContent, IonIcon } from "@ionic/vue";

import { locationOutline, todayOutline, homeOutline } from "ionicons/icons";

import { onIonViewWillEnter, onIonViewDidEnter } from '@ionic/vue';
import { onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

import AppHeader from '@/components/AppHeader.vue';

const route = useRouter()

const title = computed(() => route.currentRoute.value.meta.pageName as string)

const members = reactive<string[]>(['1']);

onIonViewDidEnter(() =>
{
    console.log('Home page did enter schedule');
});

onIonViewDidLeave(() =>
{
    console.log('Home page did leave  schedule');
});

onIonViewWillEnter(() =>
{
    console.log('Home page will enter  schedule');
});

onIonViewWillLeave(() =>
{
    console.log('Home page will leave  schedule');
});
</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
           Dasboard Admin
        </ion-content>
    </ion-page>
</template>