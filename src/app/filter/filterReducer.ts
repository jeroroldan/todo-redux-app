import { createReducer,on,Action } from "@ngrx/store";
import {  filterValids, setFilter } from "./filter.actions";


export const initialState: filterValids = 'todos'


export const _filterReducer = createReducer<filterValids,Action>(
  initialState,
  on(setFilter, (state,{ filter }) => filter),
);


export function filterReducer( state:any, action:any ){
  return _filterReducer( state , action )
}