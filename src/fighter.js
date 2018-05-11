// Create class Fighter
export class Fighter {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
        console.log(`${this.name} was created with: health = ${this.health}; power = ${this.power}`);
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`${this.name}(${this.health} h) suffered ${damage}`);
        if (this.health <= 0) {
            console.log(this.name + ' is in knockout!!!');
            return this.knockout();
        }
    }

    hit(enemy, point) {
        console.log(`${this.name} attacked on ${enemy.name}`);
        return enemy.setDamage(point * this.power);
    }

    knockout() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                console.log("time is over");
                resolve('end');
            }, 500)
        })
    }
}
