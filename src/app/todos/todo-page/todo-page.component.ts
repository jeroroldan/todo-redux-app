import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  complete: boolean = false;

constructor( private store:Store<AppState> ) {
  
}
  ngOnInit(): void {
  }

  toggleAll(){
    this.complete = !this.complete
    this.store.dispatch(actions.toggleAll({ complete: this.complete }))
  }

}
