<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonRow, IonCol } from "@ionic/vue";
import { IonPage, IonContent } from "@ionic/vue";

const router = useRouter()

</script>

<template>
    <ion-page>
        <ion-row class="ion-justify-content-center">
            <ion-col size-xs="12" size-sm="8" size-xl="4" size-lg="5" class="tw-h-screen">
                <ion-page>
                    <ion-content :fullscreen="true" color="light">
                        Admin Member
                    </ion-content>
                </ion-page>
            </ion-col>
        </ion-row>
    </ion-page>

</template>
