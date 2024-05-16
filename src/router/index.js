import routes from './routes';
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return {
            x: 0,
            y: 0
          }
        }
      }
})
router.beforeEach((to, from, next) => {
  const isToken = sessionStorage.getItem('token');
  if (to.matched.some(record => record.meta.authRequired && !isToken)) {
    next('/Login');
  } else {
    next();
  }
});

router.afterEach((to)=>{
  document.title = to.meta.title || 'AN DEV'
}) 
export default router