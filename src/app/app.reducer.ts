
import { ActionReducerMap } from '@ngrx/store';

import { Ship } from'../app/models/ship';

import { shipReducer } from '../../src/app/components/ships/ship.reducer';
import { ValidFilters } from './filters/filter.actions';

import { filterReducer } from './filters/filter.reducer';


export interface AppState {
    ships: Ship[],
    filter: ValidFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    ships: shipReducer,
    filter: filterReducer
}