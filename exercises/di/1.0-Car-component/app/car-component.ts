import {Component} from 'angular2/core';
import {Body} from './body';
import {Engine} from './engine';
import {Tires} from './tires';

@Component({
  selector: 'car-app',
  template: `<div>
            </div>`
})
export class Car {
  constructor(private body:Body,private engine:Engine,private tires:Tires) {
    console.log(body, engine, tires)
  }
}
