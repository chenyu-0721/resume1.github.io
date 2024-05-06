import resumeCover from "./pinia/resumeCover.js";
import workComponent from "./pinia/work/workComponent.js";
const { createApp } = Vue;
const { createPinia } = Pinia;

const routes = [
  { path: "/", component: resumeCover },
  { path: "/work", component: workComponent },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: { resumeCover, workComponent },
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
