<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title size="large">Firestore Checker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-button
        router-link="/songs/new"
        expand="block"
        class="ion-margin ion-justify-self-center"
        color="success"
        >New Song</ion-button
      >
      <ion-card
        color="primary"
        class="ion-justify-content-start"
        v-for="(song, index) in songs"
        :key="`song-${index}`"
      >
        <ion-card-header>
          <ion-card-title>{{ song.name }}</ion-card-title>
          <ion-card-subtitle>by {{ song.artist }}</ion-card-subtitle>
          <ion-card-subtitle>Date: {{ song.date }}</ion-card-subtitle>
        </ion-card-header>
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
      songs: [],
    };
  },
  async mounted() {
    const ref = collection(db, "songs");
    let allsongs = [];
    await getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        allsongs.push(doc.data());
      });
    });
    this.songs = allsongs;
  },
};
</script>

<style></style>
