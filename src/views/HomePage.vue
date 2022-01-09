<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title size="large"> Firestore Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-item router-link="/dictionary" class="ion-text-center">
        <ion-label>Dictionary</ion-label>
      </ion-item>
      <ion-item router-link="/songs" class="ion-text-center">
        <ion-label>Songs</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonPage,
  IonContent,
} from "@ionic/vue";
export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonPage,
    IonContent,
  },
};
</script>

<style></style>
