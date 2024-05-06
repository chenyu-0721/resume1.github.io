import resumeCover from "./pinia/resumeCover.js";
const { createApp } = Vue;
const { createPinia } = Pinia;

const routes = [{ path: "/", component: resumeCover }];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
});

const app = createApp({
  components: { resumeCover },
});

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.mount("#app");
