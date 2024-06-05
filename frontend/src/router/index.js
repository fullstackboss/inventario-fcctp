import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/dispositivos",
    name: "dispositivos",
    component: () => import("../views/DispositivosView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/nuevo",
    name: "nuevo",
    component: () => import("../views/NuevoView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/mantenedores",
    name: "mantenedores",
    component: () => import("../views/MantenedoresView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/reportes",
    name: "reportes",
    component: () => import("../views/ReportesView.vue"),
    meta: { requiresAuth: true },
  },
  /*
  
 
  */
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
