import { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";

import { appsOutline, peopleOutline, calendarOutline } from 'ionicons/icons';

import TabApp from "@/views/TabApp.vue";
import TabMember from "@/views/tabs/TabMember.vue";
import TabSchedule from "@/views/tabs/TabSchedule.vue";
import TabDashboard from "@/views/tabs/TabDashboard.vue";

import HomePage from "@/views/HomePage.vue";
import DetailPage from "@/views/DetailPage.vue";
import MemberDetailPage from "@/views/MemberDetailPage.vue";

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
    redirect: "/tabs/dashboard",
    meta: { bottomNav: true },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: TabDashboard,
        meta: { pageName: "Dashboard", icon: appsOutline },
        children: [
          {
            path: "income",
            name: "IncomeDetail",
            component: DetailPage
          }
        ]
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
