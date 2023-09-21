import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions'

interface AppStore{
  contador: number
}

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {
constructor(private store : Store<AppStore>){
  this.store.select('contador').subscribe((contador) => this.contador = contador)
}
  contador!: number;
  
  reset(){
    this.store.dispatch(actions.reset())
  }
}
