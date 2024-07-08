/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables


import { createRouter, createWebHistory } from 'vue-router'; 
import myProfile from '@/pages/myProfile.vue'
import { setupLayouts } from 'virtual:generated-layouts'

const routes=[{
  path: '/',
  name: 'myProfile',
  component: myProfile
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
