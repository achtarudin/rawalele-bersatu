<script setup lang="ts">
import { useRouter } from 'vue-router'

import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonCard, IonCardContent, IonIcon, IonButton } from "@ionic/vue";

import { personCircleOutline, callOutline, readerOutline, locationOutline } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

import { useDocument } from 'vuefire';
import memberService from '@/services/member-service'

const router = useRouter()

const refMember = memberService.findById(router.currentRoute.value.params.id as string);
const { data: member } = useDocument(refMember)

const backToTabAdminMember = async () =>
{
    await router.push({ name: 'TabAdminMember', replace: true })
}
const goToAdminMemberEditPage = async (id: string) =>
{
    await router.push({ name: 'AdminMemberEditPage', replace: true, params: { id: id } })
}

</script>

<template>
    <ion-page>
        <app-header :title="member ? member.full_name : ''" :click-back="backToTabAdminMember" />
        <ion-content :fullscreen="true" color="light">
            <ion-card color="primary" v-if="member"
                class="tw-mt-2 tw-mb-1 tw-mx-3 tw-bg-gradient-to-l tw-from-green-500 tw-to-pink-400">
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
                                                {{ member?.full_name }}
                                            </span>
                                        </div>
                                        <div class="tw-flex tw-justify-start ">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="callOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-normal">
                                                {{ member?.phone_number }}
                                            </span>
                                        </div>
                                        <div class="tw-flex tw-justify-start ">
                                            <div class="tw-mr-2">
                                                <ion-icon slot="icon-only" :icon="locationOutline" size="medium" />
                                            </div>
                                            <span class="tw-font-normal">
                                                {{ member?.address }}
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
                                        @click="() => goToAdminMemberEditPage(member?.id)">
                                        <ion-icon slot="icon-only" :icon="readerOutline" class="tw-text-white" />
                                    </ion-button>
                                </div>
                            </ion-row>
                        </ion-col>
                    </ion-row>
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>

</template>