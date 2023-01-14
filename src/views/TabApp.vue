<script setup lang="ts">
import { IonTabButton, IonTabs, IonTabBar } from '@ionic/vue';
import { IonIcon, IonLabel, IonPage, IonBadge, IonRouterOutlet } from '@ionic/vue';
import { IonGrid, IonRow, IonCol } from '@ionic/vue';

import { calendar, personCircle } from 'ionicons/icons';

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
            <ion-col size-xs="12" size-sm="12" size-xl="3" size-lg="5" class="tw-h-screen">
                <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
                    <ion-router-outlet></ion-router-outlet>
                    <ion-tab-bar slot="bottom">
                        <ion-tab-button tab="home" href="/tabs/home">
                            <ion-icon :icon="calendar" aria-hidden="true"></ion-icon>
                            <ion-label>Home</ion-label>
                            <ion-badge>6</ion-badge>
                        </ion-tab-button>
                
                        <ion-tab-button tab="about" href="/tabs/about">
                            <ion-icon :icon="personCircle" aria-hidden="true"></ion-icon>
                            <ion-label>About</ion-label>
                        </ion-tab-button>
                
                        <ion-tab-button tab="event" href="/tabs/event">
                            <ion-icon :icon="calendar" aria-hidden="true"></ion-icon>
                            <ion-label>Event</ion-label>
                            <ion-badge>6</ion-badge>
                        </ion-tab-button>
                    </ion-tab-bar>
                </ion-tabs>
            </ion-col>
        </ion-row>
    </ion-page>
</template>