import {bootstrap}    from 'angular2/platform/browser';
import {Car} from './car-component';
import {Body} from './body';
import {Engine} from './engine';
import {Tires} from './tires';

bootstrap(Car, [Body, Engine, Tires]);
