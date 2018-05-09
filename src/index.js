import "babel-polyfill";
import { Fighter } from './fighter';
import { ImprovedFighter } from './improvedFighter';
import { fight } from './fight';

let a = new Fighter('mario', 1000, 10);
let b = new ImprovedFighter('luidgi', 1000, 15);

fight(a, b, 25, 13, 45);