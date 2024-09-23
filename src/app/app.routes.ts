import { Routes } from '@angular/router';
import { DesignSystemComponent, LayoutComponent } from '@ui/components';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'design-system',
    loadComponent: () => DesignSystemComponent,
  },
];
