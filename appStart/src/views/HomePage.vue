<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div
        class="tw-text-center tw-absolute tw-left-0 tw-right-0 tw-top-[50%] tw-transform tw-translate-y-[-50%]"
      >
        <p class="tw-text-xl tw-font-bold">Ready to create an app?</p>
        <p class="tw-text-base tw-text-slate-400 tw-mt-[0]">
          Start with Ionic
          <a
            class="tw-no-underline tw-text-blue-500 "
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/components"
          >
            UI Components
          </a>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
</script>
