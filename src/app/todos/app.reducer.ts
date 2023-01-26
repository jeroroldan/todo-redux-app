import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { todoReducer } from "./todo.Reducer";
import { filterValids } from "../filter/filter.actions";
import { filterReducer } from "../filter/filterReducer";

export interface AppState {
  todos: Todo[],
  filtro: filterValids
  
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filterReducer
  
}