import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import './assets/css/styles.css'; // Global styles

const app = createApp(App);

// Use the Vue Router instance (router) in the app
app.use(router);

// Mount the app to the DOM
app.mount("#app");
