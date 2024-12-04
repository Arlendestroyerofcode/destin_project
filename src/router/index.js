import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/HomePage.vue";
import DubaiHotels from "@/pages/DubaiHotels.vue";
import BurjAlArabHotel from "@/pages/BurjAlArabHotel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dubai-hotels",
    name: "DubaiHotels",
    component: DubaiHotels,
  },
  {
    path: "/bur-al-arab-hotel",
    name: "BurjAlArabHotel",
    component: BurjAlArabHotel,
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),   // This is using HTML5 history mode
  routes,                       // Array of all routes
});

export default router;
