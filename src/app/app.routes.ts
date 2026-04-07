import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Counter } from './screens/counter/counter';
import { Todos } from './screens/todos/todos';

// Load component: Ativa o lazy loading

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'counter',
    loadComponent() {
      return import('./screens/counter/counter').then((m) => m.Counter);
    },
  },
  {
    path: 'todos',
    loadComponent() {
      return import('./screens/todos/todos').then((m) => m.Todos);
    },
  },
];
