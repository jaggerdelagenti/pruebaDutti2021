import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadShips = createAction('[Ships] Load Ships');

export const loadShipsSuccess = createAction(
    '[Ships] Load Ships Success',
    props<{ ships: Ship[] }>()
);

export const loadShipsError = createAction(
    '[Ships] Load Ships Error',
    props<{ payload: any }>()
);

