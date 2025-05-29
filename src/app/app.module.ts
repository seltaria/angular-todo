import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';
import { TodoItem } from './todo-item/todo-item';
import { TodoAdd } from './todo-add/todo-add';
import { App } from './app';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    App,
    TodoList,
    TodoItem,
    TodoAdd
  ],
  providers: [],
})
export class AppModule { }