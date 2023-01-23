<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, reactive, onMounted, } from "vue";


import { IonContent, IonPage, IonFooter } from "@ionic/vue";
import { IonItem, IonLabel, IonInput, IonIcon, IonTextarea, IonButton } from "@ionic/vue";
import { IonCard, IonCardContent } from "@ionic/vue";

import { personCircleOutline, callOutline, locationOutline } from "ionicons/icons";

import AppHeader from '@/components/AppHeader.vue';

import { useDocument } from 'vuefire';
import useLoading from '@/stores/loading';
import memberService from '@/services/member-service'
import { async } from '@firebase/util';

const route = useRoute()
const router = useRouter()
const { state: loading, setLoadingPage } = useLoading()


const title = computed(() => router.currentRoute.value.meta.pageName as string)

const inputForm = reactive({
    full_name: '',
    phone_number: '',
    address: ''
})

onMounted(() =>
{
    if (route.params.id)
    {
        setLoadingPage(true)
        const refMember = memberService.findById(route.params.id as string);
        const { promise } = useDocument(refMember)
        promise.value
            .then(async (data) =>
            {
                if (data == null)
                {
                    return await router.push({ path: '/not-found', replace: true })
                }
                inputForm.full_name = data?.full_name
                inputForm.phone_number = data?.phone_number
                inputForm.address = data?.address
            }).finally(() => setLoadingPage(false));
    }
})


const backToTabAdminMember = async () =>
{
    if (route.params.id)
    {
        return await router.push({ name: 'AdminMemberDetailPage', replace: true, params: { id: route.params.id } })
    }
    return await router.push({ name: 'TabAdminMember', replace: true })

}

const saveMember = async () =>
{
    if (route.params.id)
    {
        const memberId = await memberService.updated(route.params.id as string, inputForm)
        return await router.push({ name: 'AdminMemberDetailPage', replace: true, params: { id: memberId } })
    }

    const memberId = await memberService.created(inputForm)
    return await router.push({ name: 'AdminMemberDetailPage', replace: true, params: { id: memberId } })

}

</script>
<template>
    <ion-page v-if="loading.isLoadingPage == false">
        <app-header :title="title" :click-back="backToTabAdminMember" />
        <ion-content :fullscreen="true" color="light">
            <ion-card color="primary" class="tw-my-2 tw-mx-3 tw-bg-gradient-to-l tw-from-green-500 tw-to-pink-400">
                <ion-card-content>
                    <ion-item class="tw-py-1">
                        <ion-label>
                            <ion-icon :icon="personCircleOutline" />
                        </ion-label>
                        <ion-input placeholder="Nama lengkap" color="success" :clear-input="true"
                            v-model="inputForm.full_name" />
                    </ion-item>

                    <ion-item class="tw-py-1">
                        <ion-label>
                            <ion-icon :icon="callOutline" />
                        </ion-label>
                        <ion-input placeholder="Nomer Hp" color="success" type="tel" :clear-input="true"
                            v-model="inputForm.phone_number" />
                    </ion-item>

                    <ion-item class="tw-py-1" v-for="(item, index) in 1" :key="index">
                        <ion-label>
                            <ion-icon :icon="locationOutline" />
                        </ion-label>
                        <ion-textarea placeholder="Alamat" color="success" :clear-input="true"
                            v-model="inputForm.address" />
                    </ion-item>

                </ion-card-content>
            </ion-card>
        </ion-content>
        <ion-footer>
            <div class="tw-m-4">
                <ion-button expand="block" color="success" @click="saveMember">Simpan</ion-button>

            </div>
        </ion-footer>
    </ion-page>
</template>