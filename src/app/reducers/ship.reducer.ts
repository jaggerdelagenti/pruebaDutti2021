import { createReducer, on } from '@ngrx/store';
import { loadShip, loadShipError, loadShipSuccess } from '../store/actions';
import { Ship } from '../models/ship';

export interface shipState {
    id     : string,
    ship   : Ship,
    loaded : boolean,
    loading: boolean,
    error  : any
}

export const ShipInitialState: shipState = {
    id     : null,
    ship   : null,
    loaded : false,
    loading: false,
    error  : null
}

const _shipReducer = createReducer( ShipInitialState,

    on( loadShip, (state, { id }) => ({ 
        ...state, 
        loading: true,
        id: id
    })),
    
    
    on( loadShipSuccess, (state, { ship }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        ship: { ...ship }
    })),

    on( loadShipError, (state, { payload }) => ({ 
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

export function shipReducer(state, action) {
    return _shipReducer(state, action);
}