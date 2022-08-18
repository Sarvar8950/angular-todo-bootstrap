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
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter();
  @Input() setEditMode: boolean;
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
      window.alert('All field are mandetyry !!');
      return;
    }
    if (this.setEditMode) {
      this.updateTodo.emit(todo);
    } else {
      this.addTodo.emit(todo);
    }
    this.setEditMode = false;
  }
}
