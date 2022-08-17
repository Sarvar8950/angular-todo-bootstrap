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
  title: string;
  desc: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Input() setEditMode: boolean;
  @Input() forupdatetodo: Todo;
  @ViewChild('formid') form: NgForm;

  constructor() {}

  ngOnInit(): void {
    if (this.setEditMode) {
      this.title = this.forupdatetodo.title;
      this.desc = this.forupdatetodo.desc;
    }
  }

  onSubmit() {
    // console.log(this.forupdatetodo);
    // console.log(this.title, this.desc);
    const todo = {
      title: this.title,
      desc: this.desc,
      active: false,
    };
    if (this.title.length === 0 || this.desc.length === 0) {
      window.alert('All field are mandetyry !!');
      return;
    }
    this.addTodo.emit(todo);
    // this.setEditMode = false;
  }
}
