import { RouteRecordRaw } from "vue-router";
import { appsOutline, peopleOutline, calendarOutline } from "ionicons/icons";

import TabNavAdmin from "@/views/TabNavAdmin.vue";
import AdminMember from "@/views/admin/TabAdminMember.vue";

const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: "/admin",
    name: "TabNavAdmin",
    component: TabNavAdmin,
    redirect: "/admin/dashboard",
    meta: { TabNavAdmin: true },
    children: [
      {
        path: "dashboard",
        name: "AdminMember",
        component: AdminMember,
        meta: { pageName: "Member", icon: appsOutline }
      }
    ]
  }
];

export default adminRoutes;
