import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoStoreModule } from './store/todo-store.module';
import { TodoComponentsModule } from './components';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    TodoStoreModule,
    TodoComponentsModule
  ]
})
export class TodoModule {}
