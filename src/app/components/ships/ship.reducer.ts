import { createReducer, on } from '@ngrx/store';
import { toggleAll } from './ship.actions';
import { Ship } from '../../models/ship';

export const initialState: Ship[] = [
    new Ship("una nave",0,0,0,"",0,new Date(),0,0,0,"","","","",0,[],[],"",""),
    new Ship("otra nave",0,0,0,"",0,new Date(),0,0,0,"","","","",0,[],[],"","")
];

const _shipReducer = createReducer(initialState,
    on ( toggleAll, (state) => state.map( ship => {
        return {
          ...ship
        }
    }) ) ,
);
  
export function shipReducer(state, action) {
    return _shipReducer(state, action);
}