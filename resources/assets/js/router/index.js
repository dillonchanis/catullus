import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes as routes } from '../app/index';
import beforeEach from './beforeEach';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach(beforeEach);

export default router;