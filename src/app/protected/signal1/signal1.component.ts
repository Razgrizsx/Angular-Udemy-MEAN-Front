import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal1',
  templateUrl: './signal1.component.html',
  styleUrls: ['./signal1.component.css']
})
export class Signal1Component {
  price = signal<number>(0)
  user = signal({name: "Chris", framework: "Angular"})


  onChange(event : Event){
    const target = event.target
  }
}
