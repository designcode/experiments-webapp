import { Routes } from '@angular/router';
import { TodoService } from '@todo/data-access';
import { TodoListComponent } from './components/todo-list.component';

export const todoListRoutes: Routes = [
  {
    path: '',
    providers: [TodoService],
    loadComponent: () => TodoListComponent,
  },
];
