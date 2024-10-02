import { Routes } from '@angular/router';
import { TodoService } from '@todo/data-access';
import { todoResolver } from './resolvers/todo.resolver';
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
