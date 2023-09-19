import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {
  price = signal<number>(0)
  user = signal({name: "Chris", framework: "Angular"})
  target!: EventTarget | null

  onChange(event : Event){
    const target = event.target as HTMLInputElement
    const {value} = target
    console.log(this.price)
    this.price.set(Number(value))
  }
}
