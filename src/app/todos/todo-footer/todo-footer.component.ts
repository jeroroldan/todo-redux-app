import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filter/filter.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filterValids = 'todos';
  filtros: actions.filterValids[] = ['todos','completados','pendientes'];

  pendient:number = 0;

  constructor( private store:Store<AppState> ){

  }
  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filter => {
    //   this.filtroActual = filter
    // })
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendient = state.todos.filter(todo => !todo.complete).length
    })  
  }


  changeFilter(filter:actions.filterValids){
    this.store.dispatch(actions.setFilter({filter: filter}))
  }

  clearCompletados(){
    this.store.dispatch(actionsTodo.clearTodos())
  }

}
