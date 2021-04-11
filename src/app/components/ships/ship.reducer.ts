import { createReducer, on } from '@ngrx/store';
import { listAll } from './ship.actions';
import { Ship } from '../../models/ship';

export const initialState: Ship[] = [
    //Lista de naves locales
    new Ship("una nave",0,0,0,"",0,new Date(),0,0,0,"","","","",0,[],[],"",""),
    //Lista de naves desde la API
    new Ship("otra nave",0,0,0,"",0,new Date(),0,0,0,"","","","",0,[],[],"","")
];

const _shipReducer = createReducer(initialState,
    
);
  
export function shipReducer(state, action) {
    return _shipReducer(state, action);
}