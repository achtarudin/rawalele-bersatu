<script setup lang="ts">
import { computed } from 'vue';

import { useRouter } from 'vue-router';
import { IonRow, IonCol } from "@ionic/vue";
import { IonPage, IonContent } from "@ionic/vue";
import { IonCard, IonCardContent, IonAvatar } from "@ionic/vue";

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const backToDashboard = async () =>
{
    await router.push({ name: 'Member', replace: true })
}
</script>

<template>
    <ion-page>
        <ion-row class="ion-justify-content-center">
            <ion-col size-xs="12" size-sm="8" size-xl="4" size-lg="5" class="tw-h-screen">
                <ion-page>
                    <app-header :title="title" :click-back="backToDashboard" />
                    <ion-content :fullscreen="true" color="light">
                        <ion-card color="primary"
                            class="tw-my-2 tw-mx-3 tw-bg-gradient-to-r tw-from-pink-500 tw-to-blue-400">
                            <ion-card-content class="tw-py-1 tw-my-1">
                                <ion-row class="ion-justify-content-center">
                                    <ion-col size="auto">
                                        <ion-avatar>
                                            <img alt="Silhouette of a person's head"
                                                src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                        </ion-avatar>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-justify-content-center">
                                    <ion-col size="auto">
                                        <div>Moncos Lowrider</div>
                                    </ion-col>
                                </ion-row>
                                <ion-row class="ion-justify-content-center">
                                    <ion-col size="auto">
                                        <div>0933 3344 4343</div>
                                    </ion-col>
                                </ion-row>
                            </ion-card-content>
                        </ion-card>
                    </ion-content>
                </ion-page>
            </ion-col>
        </ion-row>
    </ion-page>
</template>
