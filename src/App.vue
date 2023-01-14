<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useTheme from '@/stores/theme';
import { IonApp, IonRouterOutlet } from '@ionic/vue';


const { setTheme } = useTheme()
onMounted(() =>
{
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(prefersDark.matches)

})
</script>
