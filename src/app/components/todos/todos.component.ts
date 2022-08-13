import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localitem: any;
  constructor() {
    this.localitem = localStorage.getItem('todos');
    // if(this.localitem === null)
    this.localitem === null
      ? (this.todos = [])
      : (this.todos = JSON.parse(this.localitem));
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    var index: number = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggletodo(todo: Todo) {
    console.log(todo);
    var index: number = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoadd(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
