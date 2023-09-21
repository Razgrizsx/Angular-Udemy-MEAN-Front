import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador.actions';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  
  contador!: number;

  constructor( private store: Store<AppState> ) {
    
    this.store.select('contador')
      .subscribe( contador => this.contador = contador);

  }

  incrementar(){
    
    this.store.dispatch( actions.incrementar()  );

  }

  decrementar(){
    this.store.dispatch(  actions.decrementar()  );
  }

}