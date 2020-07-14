import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Configurator from "../views/Configurator.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Configurator",
    component: Configurator,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
