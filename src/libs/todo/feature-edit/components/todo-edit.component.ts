import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoItem, TodoService } from '@todo/data-access';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditComponent {
  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);
  protected readonly todo = model.required<TodoItem>();
  protected readonly isEdit = computed(() => this.todo().id !== 0);

  saveTodo() {
    const todo = this.todo();

    if (this.isEdit()) {
      this.todoService.updateTodo(todo.id, todo);
    } else {
      this.todoService.saveTodo(todo);
    }

    this.router.navigate(['todo']);
  }

  cancel() {
    this.router.navigate(['todo']);
  }
}
