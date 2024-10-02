import { Routes } from '@angular/router';
import { TodoService, todoResolver } from '@todo/data-access';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';

export const todoListRoutes: Routes = [
  {
    path: '',
    providers: [TodoService],
    loadComponent: () => TodoListComponent,
  },
  {
    path: 'view/:todoId',
    providers: [TodoService],
    resolve: {
      todo: todoResolver,
    },
    loadComponent: () => TodoViewComponent,
  },
];
