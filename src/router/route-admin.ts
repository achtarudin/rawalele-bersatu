import { RouteRecordRaw } from "vue-router";
import { appsOutline, peopleOutline } from "ionicons/icons";

import TabNavAdmin from "@/views/admin/TabNavAdmin.vue";
import TabAdminMember from "@/views/admin/TabAdminMember.vue";
import TabAdminDashboard from "@/views/admin/TabAdminDashboard.vue";

import AdminMemberPage from "@/views/admin/pages/AdminMemberPage.vue";
import AdminMemberDetailPage from "@/views/admin/pages/AdminMemberDetailPage.vue";

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
        meta: { pageName: "Anggota", icon: peopleOutline }
      }
    ]
  },
  {
    path: "/admin/member/:id",
    name: "AdminMemberDetailPage",
    component: AdminMemberDetailPage,
    meta: { pageName: "Review Anggota" }
  },
  {
    path: "/admin/member/edit/:id",
    name: "AdminMemberEditPage",
    component: AdminMemberPage,
    meta: { pageName: "Edit Anggota" }
  },
  {
    path: "/admin/member/create",
    name: "AdminMemberPage",
    component: AdminMemberPage,
    meta: { pageName: "Tambah Anggota" }
  }
];

export default adminRoutes;
