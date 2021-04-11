import { createAction, props } from '@ngrx/store';


export const listLocals = createAction(
    '[SHIP] Local Ships',
    props<{ id: number }>()
);

export const listAll = createAction(
    '[SHIP] All Ships',
    props<{ completado: boolean }>()
);
