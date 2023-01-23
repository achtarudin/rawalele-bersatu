<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from 'vue-router'

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonFab, IonFabButton } from "@ionic/vue";
import { IonCard, IonCardContent, IonIcon } from "@ionic/vue";

import { db } from '@/plugins/firebase'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

import { personCircleOutline, callOutline, add } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const members = useCollection(collection(db, 'members'))

const goToAdminMemberPage = async () =>
{
    await router.push({ name: 'AdminMemberPage', replace: true })
}

</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
            <ion-card v-for="(member, index) in members" :key="index" color="primary"
                class="tw-mt-2 tw-mb-1 tw-mx-3 tw-bg-gradient-to-r tw-from-green-500 tw-to-pink-400">
                <ion-card-content class="tw-py-1 tw-mt-1">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size="auto">
                            <ion-row class="ion-justify-content-start">
                                <ion-col size="auto" class="tw-mr-2 tw-p-0">
                                    <div class="tw-mb-2">
                                        <div class="tw-flex tw-justify-start">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="personCircleOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-bold">
                                                {{ member.full_name }}
                                            </span>
                                        </div>
                                        <div class="tw-flex tw-justify-start ">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="callOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-normal">
                                                {{ member.number_phone }}
                                            </span>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                <ion-fab-button color="success" @click="goToAdminMemberPage">
                    <ion-icon :icon="add" />
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>