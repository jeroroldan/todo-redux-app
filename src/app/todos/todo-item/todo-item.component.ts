import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions'
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputRef') inputElement!: ElementRef;
  editing: boolean = false;

  chkComplete!: FormControl;
  txtInput!: FormControl

  constructor( private store:Store<AppState> ){

  }
  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe(item => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
  }

  edit(){

    this.editing = true;
    this.txtInput.setValue(this.todo.text)
    setTimeout(() =>{
      this.inputElement.nativeElement.select();
    },1);

  }

  finishEdit(){
    this.editing = false
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.text) return;
    this.store.dispatch(actions.edit({id: this.todo.id , text: this.txtInput.value }))
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({ id:this.todo.id }))
  }

}
