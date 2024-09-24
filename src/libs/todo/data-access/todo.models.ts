export type TodoStatus = 'new' | 'progress' | 'done';

export interface TodoItem {
  id: number;
  name: string;
  status: TodoStatus;
  changeLog: Partial<Record<TodoStatus, Date>>;
}
