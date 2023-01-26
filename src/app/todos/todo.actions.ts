import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';


export const clearTodos = createAction('[TODO] Clear TODOS')


export const createTodo = createAction(
    '[TODO] Create todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);


export const edit = createAction(
    '[TODO] Edit todo',
    props<{ id: number, text: string }>()
);

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{ complete: boolean }>()
);