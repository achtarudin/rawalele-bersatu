<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, reactive } from "vue";

import { IonSearchbar } from "@ionic/vue";
import { IonRow, IonCol } from "@ionic/vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { IonContent, IonPage } from "@ionic/vue";
import { IonCard, IonCardContent, IonAvatar } from "@ionic/vue";
import { IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/vue";

import { phonePortraitOutline, openOutline } from "ionicons/icons";

import { onIonViewWillEnter, onIonViewDidEnter } from '@ionic/vue';
import { onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const searchInput = reactive({
    memberName: ''
})

const members = reactive<string[]>([]);

const generateItems = () =>
{
    const count = members.length + 1;
    for (let i = 0; i < 10; i++)
    {
        const value = `Item ${count + i}`
        members.push(value as string);
    }
};


const ionInfinite = (ev: any) =>
{
    generateItems();
    setTimeout(() => ev.target.complete(), 500);
}

const goToMemberDetail = async (id: string) =>
{
    await router.push({ name: 'MemberDetail', params: { id: id } })
    console.log('detailMember');

}

onIonViewDidEnter(() =>
{
    generateItems()
    console.log('Home page did enter member');
});

onIonViewDidLeave(() =>
{
    console.log('Home page did leave  member');
});

onIonViewWillEnter(() =>
{
    console.log('Home page will enter  member');
});

onIonViewWillLeave(() =>
{
    console.log('Home page will leave  member');
});
</script>
<template>
    <ion-page>
        <app-header :title="title" />
        <ion-content :fullscreen="true" color="light">
            <div class="tw-my-1">
                <ion-searchbar color="primary" :animated="true" placeholder="Cari Anggota"
                    v-model="searchInput.memberName" />
                <ion-card v-for="(member, index) in members" :key="index" color="primary"
                    class="tw-m-0 tw-mb-2 tw-mx-3 tw-bg-gradient-to-r tw-from-blue-500 tw-to-pink-400">
                    <ion-card-content class="tw-py-1 tw-mt-1">
                        <ion-row class="ion-justify-content-between">
                            <ion-col size="auto">
                                <ion-row class="ion-justify-content-start">
                                    <ion-col size="auto" class="tw-mr-2 tw-p-0">
                                        <ion-avatar>
                                            <img alt="Silhouette of a person's head"
                                                :src="`https://picsum.photos/80/80?random=${index}`" />
                                        </ion-avatar>
                                    </ion-col>
                                    <ion-col class="ion-align-self-center">
                                        <div class="tw-font-semibold ">Moncos Lowrider</div>
                                        <div class="tw-font-light ">
                                            <ion-icon :icon="phonePortraitOutline"></ion-icon>
                                            0821 8888 7777
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </ion-col>
                            <ion-col size="2" class="ion-align-self-start">
                                <ion-row class="ion-justify-content-end">
                                    <ion-button fill="clear" class="tw-cursor-pointer"
                                        @click="() => goToMemberDetail(index as unknown as string)">
                                        <ion-icon slot="icon-only" :icon="openOutline"
                                            class="tw-text-white tw-font-bold" />
                                    </ion-button>
                                </ion-row>
                            </ion-col>
                        </ion-row>
                    </ion-card-content>
                </ion-card>
                <ion-infinite-scroll @ionInfinite="ionInfinite">
                    <ion-infinite-scroll-content></ion-infinite-scroll-content>
                </ion-infinite-scroll>
            </div>
        </ion-content>
    </ion-page>
</template>