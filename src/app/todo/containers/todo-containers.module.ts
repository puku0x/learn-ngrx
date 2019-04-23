import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { MaterialModule } from '../../material';
import { TodoComponentsModule } from '../components';
import { TodoCreateDialogComponent } from './todo-create-dialog/todo-create-dialog.component';
import { TodoDeleteDialogComponent } from './todo-delete-dialog/todo-delete-dialog.component';
import { TodoEditDialogComponent } from './todo-edit-dialog/todo-edit-dialog.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

/**
 * Container components
 */
const components = [TodoPageComponent];
const dialogs = [
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
];

@NgModule({
  imports: [SharedModule, MaterialModule, TodoComponentsModule],
  exports: [...components, ...dialogs],
  declarations: [...components, ...dialogs],
  entryComponents: [...dialogs]
})
export class TodoContainersModule {}
