import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly LOCAL_STORAGE_KEY = 'todos';
  private todos: Todo[] = [];

  constructor() { 
    this.getFromLocalStorage();
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
    this.saveToLocalStorage();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveToLocalStorage();
  }

  toggleComplete(id: number): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.saveToLocalStorage();
  }

  private getFromLocalStorage(): void {
    const lsTodos = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (lsTodos) {
      this.todos = JSON.parse(lsTodos);
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.todos));
  }
}
