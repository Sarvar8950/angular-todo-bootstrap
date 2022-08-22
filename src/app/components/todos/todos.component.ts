import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  title: string;
  desc: string;
  todoid: {};
  editMode: boolean = false;

  constructor(private todoservice: TodoserviceService) {}

  ngOnInit(): void {
    this.todoservice.gettodos().subscribe((data) => (this.todos = data));
  }

  deleteTodo(todo: any) {
    this.todoservice.deletetodos(todo.id);
    this.todoservice.gettodos().subscribe((data) => (this.todos = data));
  }

  toggletodo(todo: Todo) {
    todo.active = !todo.active;
    this.todoservice.updatetodos(todo);
  }

  todoadd(todo: Todo) {
    this.todoservice.addtodos(todo).subscribe((data) => (this.todos = data));
    setTimeout(() => {
      this.todoservice.gettodos().subscribe((data) => (this.todos = data));
    }, 100);
  }

  updatetodo(todo: any) {
    this.title = todo.title;
    this.desc = todo.desc;
    this.todoid = todo.id;
    this.editMode = true;
  }

  todoupdate(todo: any) {
    todo.id = this.todoid;
    this.todoservice.updatetodos(todo);
    setTimeout(() => {
      this.todoservice.gettodos().subscribe((data) => (this.todos = data));
    }, 100);
  }
}
