import { Routes } from '@angular/router';
import { TodoService, todoResolver } from '@todo/data-access';
import { TodoEditComponent } from './components/todo-edit.component';

export const todoEditRoutes: Routes = [
  {
    path: '',
    providers: [TodoService],
    resolve: {
      todo: todoResolver,
    },
    loadComponent: () => TodoEditComponent,
  },
  {
    path: ':todoId',
    providers: [TodoService],
    resolve: {
      todo: todoResolver,
    },
    loadComponent: () => TodoEditComponent,
  },
];
