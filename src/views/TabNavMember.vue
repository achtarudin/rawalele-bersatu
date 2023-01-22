<script setup lang="ts">

import { computed } from 'vue';

import { useRouter } from 'vue-router';

import { IonRow, IonCol } from '@ionic/vue';
import { IonTabButton, IonTabs, IonTabBar } from '@ionic/vue';
import { IonIcon, IonLabel, IonPage, IonBadge, IonRouterOutlet } from '@ionic/vue';

import { albumsOutline as defaultIcon } from 'ionicons/icons';


const router = useRouter()

const routeBottomNavs = computed(() => router.options.routes
    .filter((route) => route.meta?.TabNavMember == true && route.children && route.children?.length > 0))

const beforeTabChange = () =>
{
    // do something before tab change
}
const afterTabChange = () =>
{
    // do something after tab change
}
</script>
<template>
    <ion-page>
        <ion-row class="ion-justify-content-center">
            <ion-col size-xs="12" size-sm="8" size-xl="4" size-lg="5" class="tw-h-screen">
                <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange"
                    v-if="routeBottomNavs.length == 1">
                    <ion-router-outlet></ion-router-outlet>
                    <ion-tab-bar slot="bottom">
                        <ion-tab-button v-for="(routeBottomNav, index) in routeBottomNavs[0].children ?? []"
                            :key="index" :tab="(routeBottomNav.name as string)"
                            :href="`${routeBottomNavs[0].path}/${routeBottomNav.path}`">
                            <ion-icon aria-hidden="true"
                                :icon="((routeBottomNav.meta?.icon ?? defaultIcon) as string)" />
                            <ion-label>{{ routeBottomNav.meta?.pageName }}</ion-label>
                            <ion-badge v-if="routeBottomNav.meta?.badge">6</ion-badge>
                        </ion-tab-button>
                    </ion-tab-bar>
                </ion-tabs>
            </ion-col>
        </ion-row>
    </ion-page>
</template>