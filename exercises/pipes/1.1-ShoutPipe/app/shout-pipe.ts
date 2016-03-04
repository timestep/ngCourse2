import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'shout'})
export class ShoutPipe implements PipeTransform {
  transform(value:string, args:boolean[]) : any {
    let returnValue = typeof value === 'string' ? value.toUpperCase() : value;
    if(args[0] === true) returnValue = returnValue + '*!*'
    return returnValue;
  }
};
