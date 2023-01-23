<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end" class="tw-mr-3 ">
          <ion-button fill="clear" @click="changeTheme">
            <ion-icon slot="icon-only" :icon="theme.dark ? sunnySharp : moonSharp" size="small"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row>
        <ion-col size="6" size-xs="12" size-lg="6" v-for="(item, index) in ['Pemasukan', 'Pengeluaran']" :key="index">
          <ion-card color="primary" class="tw-mb-0">
            <ion-card-header>
              <ion-card-subtitle>{{ item }} / 20-jan-2023</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Rp. 2000,0000
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonRow, IonCol } from "@ionic/vue";
import { IonContent, IonHeader, IonPage } from "@ionic/vue";
import { IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/vue";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from "@ionic/vue";

import { sunnySharp, moonSharp } from 'ionicons/icons';
import useTheme from '../../../stores/theme';

const { setTheme, theme } = useTheme()

const changeTheme = () =>
{
  setTheme(!theme.dark)
}
</script>
