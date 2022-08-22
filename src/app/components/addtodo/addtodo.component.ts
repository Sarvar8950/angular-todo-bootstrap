import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() setEditMode: boolean;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter();
  @ViewChild('formid') form: NgForm;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: false,
    };
    if (this.title.length === 0 || this.desc.length === 0) {
      alert('All field are mandetry !!');
      return;
    }
    if (this.setEditMode == true) {
      this.updateTodo.emit(todo);
      this.setEditMode = false;
    } else {
      this.addTodo.emit(todo);
    }
    this.title = '';
    this.desc = '';
  }
}
