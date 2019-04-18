import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoContainersModule } from '../containers';

import { featureName } from './state';
import { reducer } from './reducers';
import { TodoEffects } from './effects';
import { TodoFacade } from './facades';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([TodoEffects]),
    TodoContainersModule
  ],
  providers: [TodoFacade]
})
export class TodoStoreModule {}
