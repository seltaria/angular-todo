import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';
import { TodoAdd } from '../todo-add/todo-add';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItem, TodoAdd],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  onAddTodo(title: string): void {
    this.todoService.addTodo(title);
    this.todos = this.todoService.getTodos();
  }

  onDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  onToggleComplete(id: number): void {
    this.todoService.toggleComplete(id);
    this.todos = this.todoService.getTodos();
  }
}
