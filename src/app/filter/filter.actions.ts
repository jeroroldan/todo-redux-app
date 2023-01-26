import { createAction, props } from "@ngrx/store";

export type filterValids = 'todos' | 'completados' | 'pendientes'


export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: filterValids }>()
);


