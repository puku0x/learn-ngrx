import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './state';
import { reducer } from './reducers';
import { TodoEffects } from './effects';
import { TodoFacade } from './todo.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoFacade]
})
export class TodoStoreModule {}
