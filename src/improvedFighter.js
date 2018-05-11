// Create class ImprovedFighter
import { Fighter } from "./fighter";

export class ImprovedFighter extends Fighter {
    constructor(name, health, power) {
        super(name, health, power);
    }

    doubleHit(enemy, point) {
        return super.hit(enemy, point * 2);
    }

}