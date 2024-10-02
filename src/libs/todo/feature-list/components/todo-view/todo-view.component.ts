import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem, TodoStatus } from '@todo/data-access';

@Component({
  selector: 'app-todo-view',
  standalone: true,
  templateUrl: './todo-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoViewComponent {
  private readonly router = inject(Router);

  protected readonly todo = model.required<TodoItem>();
  protected readonly formattedTodo = computed(() => {
    const todo = this.todo();

    return {
      ...todo,
      changeLog: Object.keys(todo.changeLog).map((t) => ({
        key: t,
        value: new Date(todo.changeLog[t as TodoStatus] as number),
      })),
    };
  });

  goBack() {
    this.router.navigate(['todo']);
  }
}
