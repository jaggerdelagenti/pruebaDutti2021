import { createAction, props } from '@ngrx/store';

export const limpiarTodos = createAction('[TODO] Limpiar TODOS');


export const toggle = createAction(
    '[TODO] Toggle Ship',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle ShipAll',
    props<{ completado: boolean }>()
);
