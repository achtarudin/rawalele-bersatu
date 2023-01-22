import { RouteRecordRaw } from "vue-router";

import PageNotFound from "@/views/PageNotFound.vue";

const notFoundRoute: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: { pageName: "404" }
  }
];
export default notFoundRoute;
