import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();

  onDelete(): void {
    this.deleteTodo.emit(this.todo.id);
  }

  onToggleComplete(): void {
    this.toggleComplete.emit(this.todo.id);
  }
}
