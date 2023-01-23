<script setup lang="ts">
import { useRouter } from 'vue-router';

import { IonRow, IonCol } from "@ionic/vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { IonPage, IonContent } from "@ionic/vue";
import { arrowBackCircleSharp } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()

const backToDashboard = async () =>
{
    await router.push({ path: '/', replace: true })
}

</script>

<template>
    <ion-page>
        <ion-row class="ion-justify-content-center">
            <ion-col size-xs="12" size-sm="8" size-xl="4" size-lg="5" class="tw-h-screen">
                <ion-page>
                    <app-header title="" />
                    <ion-content :fullscreen="true" color="light">
                        <div class="tw-flex tw-justify-center tw-items-center tw-h-96 ">
                            <div class="tw-text-center">
                                <div class="tw-font-bold">Halaman Tidak Di Temukan</div>
                                <div>404</div>
                                <ion-button fill="clear" class="tw-cursor-pointer" @click="backToDashboard">
                                    <ion-icon slot="icon-only" :icon="arrowBackCircleSharp" />
                                </ion-button>
                            </div>
                        </div>
                    </ion-content>
                </ion-page>
            </ion-col>
        </ion-row>
    </ion-page>
</template>