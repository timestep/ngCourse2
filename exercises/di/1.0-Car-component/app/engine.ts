import {Injectable} from 'angular2/core';

@Injectable()
export class Engine {
  v8: boolean;
  horsepower: number;
  constructor(){
    this.v8 = false
    this.horsepower = 2000
  }
}
