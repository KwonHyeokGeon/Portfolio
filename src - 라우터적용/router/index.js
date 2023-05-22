import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: ()=> import('@/pages/Home')
  },
  {
    path: "/profile",
    name: "profilePage",
    component:()=> import('@/pages/Profile')
  },
  {
    path: "/portfolio",
    name: "portfolioPage",
    component:()=> import('@/pages/Portfolio')
  },
  {
    path: "/Skill",
    name: "skillPage",
    component:()=> import('@/pages/Skill')
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  },
  {
    path:'/404',
    component: ()=> import('@/pages/NotPage')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;