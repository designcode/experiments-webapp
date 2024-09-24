import { Injectable, inject } from '@angular/core';
import { StorageService } from '@core/storage';
import { TodoItem } from './todo.models';

@Injectable()
export class TodoService {
  private readonly storageService = inject(StorageService);
  private readonly storageKey = 'todos';

  getTodos() {
    return this.storageService.getItem<TodoItem[]>(this.storageKey) ?? [];
  }

  getTodo(id: number): TodoItem | undefined {
    return this.getTodos().find((todo) => todo.id === id);
  }

  saveTodo(todo: Omit<TodoItem, 'id' | 'changeLog'>) {
    const todoWithId = { id: new Date().getTime(), changeLog: {}, ...todo };

    this.storageService.setItem<TodoItem[]>(this.storageKey, [
      ...this.getTodos(),
      todoWithId,
    ]);
  }

  updateTodo(id: number, todo: Partial<TodoItem> & Pick<TodoItem, 'status'>) {
    const todoToEdit = this.getTodo(id);

    if (todoToEdit) {
      const updatedTodo = {
        ...todoToEdit,
        ...todo,
        changeLog:
          todo.status !== todoToEdit.status
            ? { ...todoToEdit.changeLog, [todo.status]: new Date() }
            : todoToEdit.changeLog,
      };

      this.storageService.setItem<TodoItem[]>(this.storageKey, [
        ...this.todoWithout(id),
        updatedTodo,
      ]);
    }
  }

  deleteTodo(id: number) {
    this.storageService.setItem<TodoItem[]>(
      this.storageKey,
      this.todoWithout(id),
    );
  }

  private todoWithout(id: number) {
    return this.getTodos().filter((todo) => todo.id !== id);
  }
}
