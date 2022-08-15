import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      sno: Math.round(Math.random() * 100000000),
      title: this.title,
      desc: this.desc,
      active: false,
    };
    if (this.title.length === 0 || this.desc.length === 0) {
      window.alert('All field are mandetyry !!');
      return;
    }
    this.addTodo.emit(todo);
  }
}
