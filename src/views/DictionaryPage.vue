<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title size="large">Firestore Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-button router-link="/dictionary/new" expand="block" class="ion-margin ion-justify-self-center" color="success"
        >New Word</ion-button
      >
      <ion-card color="primary" class="ion-justify-content-start" v-for="(word, index) in words" :key="`word-${index}`">
        <ion-card-header>
          <ion-card-title>{{ word.turkish }}</ion-card-title>
          <ion-card-subtitle>{{ word.date }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content class="ion-text-start">
          {{ word.exp }}</ion-card-content
        >
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonContent,
} from "@ionic/vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default {
  components: {
    IonCard,
    IonButton,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonContent,
  },
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    const ref = collection(db, "dictionary");
    let allbooks = [];
    await getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allbooks.push(doc.data());
      });
    });
    this.words = allbooks;
  },
};
</script>

<style>
</style>
