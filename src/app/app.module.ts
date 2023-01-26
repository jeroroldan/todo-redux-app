import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './todos/todo.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//ngRx
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todos/todo.Reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from './todos/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: !isDevMode()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
