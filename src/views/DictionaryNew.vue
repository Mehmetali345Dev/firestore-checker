<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title size="large">Firestore Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-item>
        <ion-label position="stacked">Turkish Word</ion-label>
        <ion-input v-model="word"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Explanation</ion-label>
        <ion-input v-model="explanation"></ion-input>
      </ion-item>
      <ion-button
        @click="addword"
        expand="block"
        class="ion-margin ion-justify-self-center"
        color="success"
        >Add Word</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
/* eslint-disable */
import {
  IonButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonPage,
  IonContent,
} from "@ionic/vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
export default {
  components: {
    IonButton,
    IonItem,
    IonHeader,
    IonInput,
    IonToolbar,
    IonTitle,
    IonPage,
    IonContent,
  },
  data() {
    return {
      word: "",
      explanation: "",
    };
  },
  methods: {
    async addword() {
      const word = this.word;
      const explanation = this.explanation;
      const date = new Date();
      const today =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      await setDoc(
        doc(
          db,
          "dictionary",
          Math.random().toString(36).substring(2, 14) +
            Math.random().toString(36).substring(2, 14)
        ),
        {
          turkish: word,
          explanation: explanation,
          date: today,
        }
      ).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style></style>
