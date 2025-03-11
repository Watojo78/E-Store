import { Routes } from '@angular/router';

export const routes: Routes = [
  //storefront routes
  {
    path: '',
    loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent),
    data: { layout: 'storefront' },
    children: [
      {
        path: '',
        loadChildren: () => import('./features/storefront/storefront.routes').then((m) => m.routes),
      },
    ],
  },
];
