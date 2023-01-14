import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import TabApp from "@/views/TabApp.vue";
import TabHome from "@/views/tabs/TabHome.vue";
import TabAbout from "@/views/tabs/TabAbout.vue";
import TabEvent from "@/views/tabs/TabEvent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs"
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage
  },
  {
    path: "/tabs",
    name: "BottomNav",
    component: TabApp,
    redirect: "/tabs/home",
    children: [
      {
        path: "home",
        name: "TabHome",
        component: TabHome,
        meta: { pageName: "Home" }
      },
      {
        path: "about",
        name: "TabAbout",
        component: TabAbout,
        meta: { pageName: "About" }
      },
      {
        path: "event",
        name: "TabEvent",
        component: TabEvent,
        meta: { pageName: "Event" }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
