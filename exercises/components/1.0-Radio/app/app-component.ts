import {Component} from 'angular2/core';
import Radio from './radio';

@Component({
  selector: 'ngc-app',
  template: `<div class="p3">
    <ngc-radio
      [buttons]="buttons"
      [selected]="selected"
      [onUpdate]="updateSelected($event)"
      >
      {{selected}}
    </ngc-radio>
  </div>`,
  directives: [Radio]
})
export default class App {
  buttons: Array<any> = [
    {
      title: 'Chunkles',
      value: 'OK'
    },
    {
      title: 'ok',
      value: 'Chunkles'
    },
    {
      title: 'hoopla',
      value: 'hoopla'
    }
  ];
  selected: string;

  constructor(){
    this.selected = this.buttons[0].value;
  }

  updateSelected(value:string) {
    this.selected = value;
  }
}
