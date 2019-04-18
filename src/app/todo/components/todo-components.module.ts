import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { MaterialModule } from '../../material';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

/**
 * Presentational components
 */
const components = [TodoListComponent, TodoListItemComponent];
const dialogs = [];

@NgModule({
  imports: [SharedModule, MaterialModule],
  exports: [...components, ...dialogs],
  declarations: [...components, ...dialogs],
  entryComponents: [...dialogs]
})
export class TodoComponentsModule {}
