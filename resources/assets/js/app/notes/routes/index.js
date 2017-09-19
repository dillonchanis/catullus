import { Home } from '../components';
import { Notepad } from '../components';

export default [
  {
    path: '/note',
    component: Home,
    name: 'note',
    meta: {
      guest: false,
      needsAuth: true
    }
  },
  {
    path: '/note/:id',
    component: Notepad,
    name: 'notepad',
    meta: {
      guest: false,
      needsAuth: true
    }
  },
];