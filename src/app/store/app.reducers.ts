import { ActionReducerMap } from '@ngrx/store';
import * as reducers from '../reducers';


export interface AppState {
   ships: reducers.ShipsState;
}

export const appReducers: ActionReducerMap<AppState> = {
   ships: reducers.shipsReducer
}