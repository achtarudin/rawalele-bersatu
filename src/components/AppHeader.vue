<script setup lang="ts">
import { sunnySharp, moonSharp } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/vue";

import useTheme from '@/stores/theme';

const { setTheme, theme } = useTheme()

defineProps({
    title: String,
})

const changeTheme = () =>
{
    setTheme(!theme.dark)
}
</script>

<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>{{ title ?? 'Title'}}</ion-title>
            <ion-buttons slot="end" class="tw-mr-3 ">
                <ion-button fill="clear" @click="changeTheme">
                    <ion-icon slot="icon-only" :icon="theme.dark ? sunnySharp : moonSharp" size="small"></ion-icon>
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>