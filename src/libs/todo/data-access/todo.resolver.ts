import { inject } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot } from "@angular/router";
import { TodoItem, TodoService } from '@todo/data-access';

export const todoResolver: ResolveFn<TodoItem | undefined> = (
  route: ActivatedRouteSnapshot,
) => {
  const emptyTodo: TodoItem = {
    id: 0,
    name: '',
    status: 'new',
    changeLog: {},
  };

  const todoId = route.paramMap.get('todoId');

  if (todoId) {
    return inject(TodoService).getTodo(Number(todoId)) ?? emptyTodo;
  }

  return emptyTodo;
};
