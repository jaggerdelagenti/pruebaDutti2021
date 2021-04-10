
import { ActionReducerMap } from '@ngrx/store';

import { Ship } from'../app/models/ship';

import { shipReducer } from '../../src/app/components/ships/ship.reducer';

// import { filtroReducer } from './filtro/filtro.reducer';
// import { filtrosValidos } from './filtro/filtro.actions';

export interface AppState {
    ships: Ship[],
    // filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    ships: shipReducer,
    // filtro: filtroReducer
}