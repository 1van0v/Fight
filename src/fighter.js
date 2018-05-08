// Create class Fighter
export class Fighter {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage) {
        this.health =- damage;
    }

    hit(enemy, point) {
        //enemy.setDamage(point * power);
        //TODO implement power
    }

    knockout() {
        //TODO return promises
    }
}
