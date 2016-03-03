import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'ngc-radio',

  template: `
    <div class="flex center">
      <a href="#!"
        class="flex-auto btn btn-primary rounded-left"
        *ngFor="#btn of buttons; #last = last; #i = index;"
        (click)=select(btn.value)
        [ngClass] = "{
          'bg-navy': btn.value === selected,
          'rounded-left': i == 0,
          'border-left': i != 0,
          'not-rounded': i != 0 && !last,
          'rounded-right': last
        }"
        >
        {{btn.title}}
      </a>
    </div>
  `,
  inputs: ['buttons', 'selected'],
  outputs: ['onUpdate']
})
export default class Radio {
  buttons: Array<any>;
  selected: string;
  onUpdate: EventEmitter = new EventEmitter();

  select(value:string){
    this.onUpdate.onEmit(value);
  }
}
