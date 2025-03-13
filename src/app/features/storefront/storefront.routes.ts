import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'EStore • Home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    title: 'EStore • Home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
