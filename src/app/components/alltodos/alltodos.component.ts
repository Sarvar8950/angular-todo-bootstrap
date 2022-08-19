import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-alltodos',
  templateUrl: './alltodos.component.html',
  styleUrls: ['./alltodos.component.css'],
})
export class AlltodosComponent implements OnInit {
  @Input() todo: Todo;
  @Input() setEditMode: boolean;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todotoggle: EventEmitter<Todo> = new EventEmitter();
  @Output() todoupdate: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.setEditMode = false;
    this.todoDelete.emit(todo);
  }

  updatetodo(todo: Todo) {
    this.todoupdate.emit(todo);
  }

  marksAsDone(todo: Todo) {
    this.todotoggle.emit(todo);
  }
}
