import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  OnInit
} from '@angular/core';

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

  /**
   * Constructor
   */
  constructor() {}

  ngOnInit() {}
}
