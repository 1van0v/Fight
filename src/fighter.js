// Create class Fighter
export class Fighter {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage) {
        console.log(this.name + ' suffered ' + damage + ' damage');
        this.health -= damage;
        console.log(this.name + ' has ' + this.health + ' points of health');
        if (this.health <= 0) {
            console.log(this.name + ' is in knockout!!!');
            return this.knockout();
        }
    }

    hit(enemy, point) {
        console.log(this.name + ' attacked on' + enemy.name);
        return enemy.setDamage(point * this.power);
    }

    knockout() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                console.log("time is over");
                resolve('end');
            }, 5000)
        })
    }
}
