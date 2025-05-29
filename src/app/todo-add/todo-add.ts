import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.scss'
})
export class TodoAdd {
  @Output() addTodo = new EventEmitter<string>();
  title = '';

  onSubmit(): void {
    if (this.title.trim()) {
      this.addTodo.emit(this.title);
      this.title = '';
    }
  }
}
