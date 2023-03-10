<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from 'vue-router'

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonFab, IonFabButton, IonButton } from "@ionic/vue";
import { IonCard, IonCardContent, IonIcon } from "@ionic/vue";

import { useCollection } from 'vuefire'
import memberService from '@/services/member-service'

import AppHeader from '@/components/AppHeader.vue';

import { personCircleOutline, callOutline, add, openOutline } from "ionicons/icons";


const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const members = useCollection(memberService.getAllPerPage(10, {}))

const goToAdminMemberPage = async () =>
{
    await router.push({ name: 'AdminMemberPage', replace: true })
}
const goToMemberDetail = async (id: string) =>
{
    await router.push({ name: 'AdminMemberDetailPage', replace: true, params: { id: id } })
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
                        <ion-col size="10">
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
                                                {{ member.phone_number }}
                                            </span>
                                        </div>
                                    </div>
                                </ion-col>
                            </ion-row>
                        </ion-col>
                        <ion-col size="2" class="ion-align-self-center">
                            <ion-row class="ion-justify-content-end">
                                <div>
                                    <ion-button fill="clear" class="tw-cursor-pointer"
                                        @click="() => goToMemberDetail(member.id)">
                                        <ion-icon slot="icon-only" :icon="openOutline" class="tw-text-white" />
                                    </ion-button>
                                </div>
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