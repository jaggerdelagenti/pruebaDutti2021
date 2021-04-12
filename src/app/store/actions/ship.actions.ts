import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadShip = createAction(
    '[Ship] Load Ship',
    props<{ id: string }>()
);

export const loadShipSuccess = createAction(
    '[Ship] Load Ship Success',
    props<{ ship: Ship }>()
);

export const loadShipError = createAction(
    '[Ship] Load Ship Error',
    props<{ payload: any }>()
);

