import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadShip = createAction(
    '[SHIP] Load Ship',
    props<{ id: string }>()
);

export const loadShipSuccess = createAction(
    '[SHIP] Load Ship Success',
    props<{ ship: Ship }>()
);

export const loadShipError = createAction(
    '[SHIP] Load Ship Error',
    props<{ payload: any }>()
);

