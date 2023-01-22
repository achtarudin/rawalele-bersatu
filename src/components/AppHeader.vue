<script setup lang="ts">

import { sunnySharp, moonSharp, arrowBackOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/vue";

import useTheme from '@/stores/theme';
import useAuth from '@/stores/auth';

const { setTheme, theme } = useTheme()
const { state: { isAuth } } = useAuth()

const props = defineProps({
    title: String,
    clickBack: {
        type: Function,
        default: null
    }
})


const onBack = () =>
{
    if (typeof props.clickBack === 'function')
    {
        props.clickBack()
    }
}

const changeTheme = () =>
{
    setTheme(!theme.dark)
}
</script>

<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button fill="clear" @click="onBack" v-if="clickBack">
                    <ion-icon slot="icon-only" :icon="arrowBackOutline" size="medium"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{ title ?? null}}</ion-title>
            <ion-buttons slot="end" class="tw-mr-3 ">
                <ion-button fill="clear" @click="changeTheme">
                    <ion-icon slot="icon-only" :icon="theme.dark ? sunnySharp : moonSharp" size="small"
                        :color="isAuth ? 'success' : 'primary' " />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>