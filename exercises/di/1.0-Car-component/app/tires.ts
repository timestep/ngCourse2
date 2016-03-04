import {Injectable} from 'angular2/core';

@Injectable()
export class Tires {
  size: number;
  spinning: boolean;
  constructor(){
    this.size = 15
    this.spinning = false
  }
}
