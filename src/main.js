import Vue from "vue";
import App from "./App";
import { store } from "./store"; //Configuracion de  Vuex
import { router } from "./router"; // Configuracion del enrutador

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
