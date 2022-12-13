import { createRouter, createWebHistory } from 'vue-router'


// import Home from '../views/Home'
const Home = () => import('../views/Home')
const About = () => import('../views/About')
// import About from '../views/About'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
