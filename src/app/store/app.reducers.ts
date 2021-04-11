import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   ships: reducers.ShipsState,
   ship: reducers.shipState,
}

export const appReducers: ActionReducerMap<AppState> = {
   ships: reducers.shipsReducer,
   ship: reducers.shipReducer
}