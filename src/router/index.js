import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../pages/About.vue'
import CarDetails from '../pages/CarDetailsPage.vue'
import Cars from '../pages/CarsPage.vue'
import Home from '../pages/Home.vue'
import HouseDetails from '../pages/HouseDetailsPage.vue'
import Houses from '../pages/HousesPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    // NOTE the parameter name is distinguished by the ':'
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },

  {
    path: '/profile',
    name: 'About',
    component: About
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetails
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
