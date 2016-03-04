import {Injectable} from 'angular2/core';

// @Injectable()
export class Body {
  color: string;
  chrome: boolean;
  constructor(){
    this.color = 'red';
    this.chrome = true;
  }
}
