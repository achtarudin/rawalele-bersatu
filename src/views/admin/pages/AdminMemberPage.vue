<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, reactive } from "vue";

import { IonContent, IonPage } from "@ionic/vue";
import { IonItem, IonLabel, IonInput, IonIcon, IonTextarea, IonButton } from "@ionic/vue";
import { personCircleOutline, callOutline, locationOutline } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

const router = useRouter()

const title = computed(() => router.currentRoute.value.meta.pageName as string)

const inputForm = reactive({
    full_name: '',
    phone_number: '',
    address: ''
})

const backToTabAdminMember = async () =>
{
    await router.push({ name: 'TabAdminMember', replace: true })
}

const saveMember = () =>
{
    console.log(inputForm);
}

</script>
<template>
    <ion-page>
        <app-header :title="title" :click-back="backToTabAdminMember" />
        <ion-content :fullscreen="true" color="light">
            <ion-item class="tw-p-2 tw-m-0">
                <ion-label>
                    <ion-icon :icon="personCircleOutline" />
                </ion-label>
                <ion-input placeholder="Nama lengkap" color="success" :clear-input="true"
                    v-model="inputForm.full_name" />
            </ion-item>

            <ion-item class="tw-p-2 ">
                <ion-label>
                    <ion-icon :icon="callOutline" />
                </ion-label>
                <ion-input placeholder="Nomer Hp" color="success" type="tel" :clear-input="true"
                    v-model="inputForm.phone_number" />
            </ion-item>

            <ion-item class="tw-p-2 ">
                <ion-label>
                    <ion-icon :icon="locationOutline" />
                </ion-label>
                <ion-textarea placeholder="Alamat" color="success" :clear-input="true" v-model="inputForm.address" />
            </ion-item>
            <div class="tw-px-2">
                <ion-button expand="block" color="success" @click="saveMember">Simpan</ion-button>
            </div>

        </ion-content>
    </ion-page>
</template>