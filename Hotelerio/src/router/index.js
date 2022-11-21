import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AuthView from '../views/AuthView.vue'
import CheckAvailableRooms from '../views/CheckAvailableRooms.vue'
import PersonalView from '../views/PersonalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
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
  ]
})

router.beforeEach((to,_,next)=> {
/*   console.log(`to: ${to.name} -- Auth Required? ${to.meta.requiresAuth}`) */

  const token = localStorage.getItem('token')
  // Si la ruta a donde quiero ir necesita autenticación
  // ... y no tengo el token, llévame a la pagina de login
  if (to.meta.requiresAuth && !token) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router

