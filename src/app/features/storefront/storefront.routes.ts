import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Watojoel • Home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    title: 'Watojoel • Home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
