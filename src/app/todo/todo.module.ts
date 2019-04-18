import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { TodoComponentsModule } from './components';
import { TodoContainersModule } from './containers';
import { TodoStoreModule } from './store';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    TodoRoutingModule,
    TodoStoreModule,
    TodoContainersModule,
    TodoComponentsModule
  ]
})
export class TodoModule {}
