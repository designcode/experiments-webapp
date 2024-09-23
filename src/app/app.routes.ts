import { Routes } from '@angular/router';
import { DesignSystemComponent } from '@ui/components';

export const routes: Routes = [
  {
    path: 'design-system',
    loadComponent: () => DesignSystemComponent,
  },
];
