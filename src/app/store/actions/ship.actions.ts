import { createAction, props } from '@ngrx/store';
import { Ship } from '../../models/ship';

export const loadShip = createAction(
    '[SHIP] load ship',
    props<{ id: string }>()
);

export const loadShipSuccess = createAction(
    '[SHIP] load ship Success',
    props<{ ship: Ship }>()
);

export const loadShipError = createAction(
    '[SHIP] load ship Error',
    props<{ payload: any }>()
);

