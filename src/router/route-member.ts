import { RouteRecordRaw } from "vue-router";

import middlewareHome from "./middleware-home";

import TabNavMember from "@/views/TabNavMember.vue";

import TabMember from "@/views/member/TabMember.vue";
import TabSchedule from "@/views/member/TabSchedule.vue";
import TabDashboard from "@/views/member/TabDashboard.vue";

import HomePage from "@/views/member/pages/HomePage.vue";
import DetailPage from "@/views/member/pages/DetailPage.vue";
import MemberDetailPage from "@/views/member/pages/MemberDetailPage.vue";


import { appsOutline, peopleOutline, calendarOutline } from "ionicons/icons";

const isTrue = true;

const memberRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    beforeEnter: [middlewareHome],
    component: isTrue ? TabNavMember : HomePage
  },
  {
    path: "/tabs",
    name: "TabNavMember",
    component: TabNavMember,
    redirect: "/tabs/dashboard",
    meta: { TabNavMember: true },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: TabDashboard,
        meta: { pageName: "Dashboard", icon: appsOutline }
      },
      {
        path: "member",
        name: "Member",
        component: TabMember,
        meta: { pageName: "Anggota", icon: peopleOutline }
      },
      {
        path: "schedule",
        name: "Schedule",
        component: TabSchedule,
        meta: { pageName: "Jadwal", icon: calendarOutline }
      }
    ]
  },
  {
    path: "/dashboard/income",
    name: "DashboardIncome",
    component: DetailPage,
    meta: { pageName: "Pemasukan" }
  },
  {
    path: "/dashboard/outcome",
    name: "DashboardOutcome",
    component: DetailPage,
    meta: { pageName: "Pengeluaran" }
  },
  {
    path: "/member/:id",
    name: "MemberDetail",
    component: MemberDetailPage,
    meta: { pageName: "Member Detail" }
  }
];
export default memberRoutes;
