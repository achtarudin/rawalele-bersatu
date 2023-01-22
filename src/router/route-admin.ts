import { RouteRecordRaw } from "vue-router";
import { appsOutline, peopleOutline, calendarOutline } from "ionicons/icons";

import TabNavAdmin from "@/views/admin/TabNavAdmin.vue";
import TabAdminMember from "@/views/admin/TabAdminMember.vue";
import TabAdminDashboard from "@/views/admin/TabAdminDashboard.vue";

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
        name: "TabAdminDashboard",
        component: TabAdminDashboard,
        meta: { pageName: "Dashboard", icon: appsOutline }
      },
      {
        path: "member",
        name: "TabAdminMember",
        component: TabAdminMember,
        meta: { pageName: "Member", icon: peopleOutline }
      }
    ]
  }
];

export default adminRoutes;
