<script setup lang="ts">
import { computed } from 'vue';

import { useRouter } from 'vue-router';
import { IonRow, IonCol } from "@ionic/vue";
import { IonPage, IonContent } from "@ionic/vue";

import AppHeader from '../../../components/AppHeader.vue';

const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const backToDashboard = async () =>
{
    await router.push({ name: 'Dashboard', replace: true })
}
</script>

<template>
    <ion-page>
        <ion-row class="ion-justify-content-center">
            <ion-col size-xs="12" size-sm="8" size-xl="4" size-lg="5" class="tw-h-screen">
                <ion-page>
                    <app-header :title="title"
                        :click-back="backToDashboard" />
                    <ion-content :fullscreen="true" color="light">
                        <p v-for="(item, index) in 3" :key="index" class="tw-mb-2 tw-px-2">
                            {{ item }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta incidunt vel,
                            blanditiis
                            excepturi, a eos praesentium cupiditate quibusdam saepe dolor nemo. Qui, quos! Sunt
                            perferendis ut non voluptatibus quod?
                        </p>
                    </ion-content>
                </ion-page>
            </ion-col>
        </ion-row>
    </ion-page>
</template>
