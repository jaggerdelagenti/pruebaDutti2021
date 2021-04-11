import { createAction, props } from '@ngrx/store';

export type ValidFilters = 'todos';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{ filter: ValidFilters }>()
);

