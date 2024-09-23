import { Routes } from '@angular/router';
import { DesignSystemComponent, LayoutComponent } from '@ui/components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: LayoutComponent,
    loadChildren: () =>
      import('@todo/shell').then(({ todoRoutes }) => todoRoutes),
  },
  {
    path: 'design-system',
    loadComponent: () => DesignSystemComponent,
  },
];
