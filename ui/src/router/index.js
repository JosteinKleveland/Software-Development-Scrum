import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LoginView.vue";
import SignUp from "../views/SignupView.vue";
import ToolDetails from "../views/DisplayView.vue";
import RegTool from "../views/RegToolView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signin",
      name: "signin",
      component: LogIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/toolDetails/:_id",
      name: "toolDetails",
      component: ToolDetails
    },
    {
      path: "/regTool",
      name: "regTool",
      component: RegTool,
    }
  ],
});

export default router;
