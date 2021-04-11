import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadShips = createAction('[SHIPS] Load Ships');

export const loadShipsSuccess = createAction(
    '[SHIPS] Load Ships Success',
    props<{ ships: Ship[] }>()
);

export const loadShipsError = createAction(
    '[SHIPS] Load Ships Error',
    props<{ payload: any }>()
);

