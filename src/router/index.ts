import { createRouter, createWebHistory } from "@ionic/vue-router";

import adminRoutes from "./route-admin";
import memberRoutes from "./route-member";
import notFoundRoute from "./route-not-found";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // ...memberRoutes,
    ...adminRoutes,
    ...notFoundRoute
  ]
});

export default router;
