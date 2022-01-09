<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title size="large">Firestore Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-item>
        <ion-label position="stacked">Song Name</ion-label>
        <ion-input v-model="name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Artist</ion-label>
        <ion-input v-model="artist"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Youtube ID</ion-label>
        <ion-input v-model="youtubeId"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Spotify URL</ion-label>
        <ion-input v-model="spotify"></ion-input>
      </ion-item>
      <ion-button
        @click="checkDay()"
        expand="block"
        class="ion-margin ion-justify-self-center"
        color="success"
        >Add Song</ion-button
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
  alertController,
} from "@ionic/vue";
import { doc, setDoc, getDoc } from "firebase/firestore";
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
      name: "",
      artist: "",
      youtubeId: "",
      spotify: "",
    };
  },
  methods: {
    async presentAlertConfirm() {
      const alert = await alertController.create({
        header: "Warning!",
        message:
          "<strong>Today's song is already added! Are you sure about change song?</strong>!!!",
        buttons: [
          {
            text: "Nope",
            role: "cancel",
            cssClass: "secondary",
            id: "cancel-button",
          },
          {
            text: "Okay",
            id: "confirm-button",
            handler: () => {
              this.addword();
            },
          },
        ],
      });
      return alert.present();
    },
    async checkDay() {
      const date = new Date();
      const today =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      const ref = doc(db, "songs", today);
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        this.presentAlertConfirm();
      } else {
        this.addword();
      }
    },
    async addword() {
      const date = new Date();
      const today =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      await setDoc(doc(db, "songs", today), {
        name: this.name,
        artist: this.artist,
        youtubeId: this.youtubeId,
        spotify: this.spotify,
        date: today,
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style></style>
