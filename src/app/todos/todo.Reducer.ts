import { createReducer, on } from '@ngrx/store';
import { clearTodos, createTodo, deleteTodo, edit, toggle, toggleAll } from './todo.actions'
import { Todo } from './models/todo.model';



export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('salvar al galaxia'),
  new Todo('salvar al planeta')
];

export const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state,{ text }) => [...state,new Todo(text) ]),
  on(clearTodos, state => state.filter(todo => !todo.complete) ),
  on(toggle, (state,{ id }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          complete: !todo.complete
        }
      }else{
        return todo;
      }
    })
  }),
  on(edit, (state,{ text , id }) => {
    return state.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          text: text
        }
      }else{
        return todo;
      }
    })
  }),
  on(deleteTodo, (state,{ id }) => {
    return state.filter(item => item.id !== id)
  }),

  on(toggleAll, (state,{ complete }) => {
    return state.map(todo => {
      return {
        ...todo,
        complete: complete
      }
    })
    
  }),
  
);


export function todoReducer(state:any,action:any){
  return _todoReducer(state,action)
}