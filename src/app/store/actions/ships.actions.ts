import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadships = createAction('[SHIPS] load ships');

export const loadShipsSuccess = createAction(
    '[SHIPS] load ships Success',
    props<{ ships: any }>()
);

export const loadShipsError = createAction(
    '[SHIPS] load ships Error',
    props<{ payload: any }>()
);

