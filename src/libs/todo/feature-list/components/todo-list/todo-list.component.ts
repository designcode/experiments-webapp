import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '@todo/data-access';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);
  protected readonly todos = signal(this.todoService.getTodos());

  viewTodo(id: number) {
    this.router.navigate(['todo/view', id]);
  }

  addTodo() {
    this.router.navigate(['todo/edit']);
  }

  editTodo(id: number) {
    this.router.navigate(['todo/edit', id]);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos.set(this.todoService.getTodos());
  }
}
