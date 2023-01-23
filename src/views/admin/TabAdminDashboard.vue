<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from "vue";

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonCard, IonCardContent, IonIcon } from "@ionic/vue";

import { locationOutline, todayOutline, homeOutline } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

const route = useRouter()

const title = computed(() => route.currentRoute.value.meta.pageName as string)


</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
            <ion-card v-for="(member, index) in 1" :key="index" color="primary"
                class="tw-mt-2 tw-mb-1 tw-mx-3 tw-bg-gradient-to-r tw-from-green-500 tw-to-pink-400">
                <ion-card-content class="tw-py-1 tw-mt-1">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size="auto">
                            <ion-row class="ion-justify-content-start">
                                <ion-col size="auto" class="tw-mr-2 tw-p-0">
                                    <div class="tw-mb-2">
                                        <div class="tw-flex tw-justify-start">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="homeOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-bold">
                                                Arisan Rawa Lele Bersatu
                                            </span>
                                        </div>
                                        <div class="tw-flex tw-justify-start ">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="todayOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-normal">
                                                22-04-2023
                                            </span>
                                        </div>
                                    </div>
            
                                    <div class="tw-flex tw-justify-start">
                                        <div class="tw-mr-2">
                                            <ion-icon slot="icon-only" :icon="locationOutline" size="medium" />
                                        </div>
                                        <span class="tw-font-light">
                                            Jl. Rawa lele RT: 003/010, Wajib membawa pasangan dan membawa uang
                                        </span>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>