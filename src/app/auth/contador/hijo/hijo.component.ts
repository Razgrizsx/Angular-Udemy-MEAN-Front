import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions'

interface AppStore{
  contador: number
}

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  constructor(private store: Store<AppStore>){
    this.store.select('contador').subscribe((contador) => this.contador = contador)
  }


contador! : number


multiplicar(){
  this.store.dispatch(actions.multiplicar({numero :2}))
}

dividir(){
  this.store.dispatch(actions.dividir({numero :2}))
}

resetAll(event: number){
  this.contador = event
}
}
