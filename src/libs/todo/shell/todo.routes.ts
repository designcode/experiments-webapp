import { Routes } from '@angular/router';

export const todoRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@todo/feature-list').then(({ todoListRoutes }) => todoListRoutes),
  },
];
