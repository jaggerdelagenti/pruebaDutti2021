import { createReducer, on } from '@ngrx/store';
import { loadShips, loadShipsError, loadShipsSuccess } from '../actions';
import { Ship } from '../../models/ship';

export interface ShipsState {
    ships  : Ship[],
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const shipsInitialState: ShipsState = {
    ships  : [],
    loaded : false,
    loading: false,
    error  : null
}

const _shipsReducer = createReducer(shipsInitialState,

    on( loadShips, state => ({ ...state, loading: true })),
    
    on( loadShipsSuccess, (state, { ships }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        ships: [ ...ships ] 
    })),

    on( loadShipsError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
);

export function shipsReducer(state, action) {
    return _shipsReducer(state, action);
}