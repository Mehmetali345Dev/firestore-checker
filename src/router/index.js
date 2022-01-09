import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import DictionaryPage from "../views/DictionaryPage.vue";
import DictionaryNew from "../views/DictionaryNew.vue";
import SongsPage from "../views/SongsPage.vue";
import SongsNew from "../views/SongsNew.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/dictionary",
    component: DictionaryPage,
  },
  {
    path: "/dictionary/new",
    component: DictionaryNew,
  },
  {
    path: "/songs",
    component: SongsPage,
  },
  {
    path: "/songs/new",
    component: SongsNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
