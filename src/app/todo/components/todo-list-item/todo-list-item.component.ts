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
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<string>();

  form: FormGroup;

  /**
   * Constructor
   */
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.todo.text, Validators.required]
    });
  }

  /**
   * Update
   */
  onUpdate() {
    const text: string = this.form.get('text').value;
    this.update.emit({ ...this.todo, text });
  }

  /**
   * Remove
   */
  onRemove() {
    this.remove.emit(this.todo.id);
  }
}
