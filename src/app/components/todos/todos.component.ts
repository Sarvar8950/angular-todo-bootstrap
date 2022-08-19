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
  // localitem: any;  // for localstorage
  constructor(private todoservice: TodoserviceService) {
    // // for localstorage
    // this.localitem = localStorage.getItem('todos');
    // // if(this.localitem === null)
    // this.localitem === null
    //   ? (this.todos = [])
    //   : (this.todos = JSON.parse(this.localitem));
  }

  ngOnInit(): void {
    this.todoservice.gettodos().subscribe((data) => (this.todos = data));
  }

  deleteTodo(todo: any) {
    // // for localstorage
    // var index: number = this.todos.indexOf(todo);
    // this.todos.splice(index, 1);
    // localStorage.setItem('todos', JSON.stringify(this.todos));

    this.todoservice.deletetodos(todo.id);
    this.todoservice.gettodos().subscribe((data) => (this.todos = data));
  }

  toggletodo(todo: Todo) {
    // // for localstorage
    // var index: number = this.todos.indexOf(todo);
    // this.todos[index].active = !this.todos[index].active;
    // localStorage.setItem('todos', JSON.stringify(this.todos));

    todo.active = !todo.active;
    this.todoservice.updatetodos(todo);
  }

  todoadd(todo: Todo) {
    // // for localstorage
    // this.todos.push(todo);
    // localStorage.setItem('todos', JSON.stringify(this.todos));

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
    // console.log(todo);
    this.todoservice.updatetodos(todo);
    setTimeout(() => {
      this.todoservice.gettodos().subscribe((data) => (this.todos = data));
    }, 100);
  }
}
