import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../../../models';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent implements OnInit {
  @Input() loading: boolean;
  @Output() create = new EventEmitter<Todo>();

  form: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', Validators.required]
    });
  }

  /**
   * Submit
   */
  onSubmit() {
    const text: string = this.form.get('text').value;
    const todo = new Todo();
    this.create.emit({ ...todo, text });
    this.form.reset();
  }
}
