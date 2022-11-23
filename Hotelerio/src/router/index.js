import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import CheckAvailableRooms from '../views/CheckAvailableRooms.vue'
import PersonalView from '../views/PersonalView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/checkAvailableRooms',
      name: 'checkAvailableRooms',
      component: CheckAvailableRooms,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
import { useAuthStore } from '../stores/store'

router.beforeEach((to,_,next)=> {
  const store = useAuthStore()
  
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router

