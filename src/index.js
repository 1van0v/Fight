import "babel-polyfill";
import { Fighter } from './fighter';
import { ImprovedFighter } from './improvedFighter';
import { fight } from './fight';

let a = new Fighter('mario', 1000, 5);
let b = new ImprovedFighter('luidgi', 1000, 10);

fight(a, b, 12, 6, 22, 11, 3);