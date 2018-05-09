// create async function fight

export async function fight(fighter, improvedFighter, ...args) {
    let players = [fighter, improvedFighter];
    for (let i = 0; i < args.length; i++) {
        console.log('-------------------' + i + '-------------------')
        for (let j = 0; j < players.length; j++) {
            let attacker = players[j];
            let victim = players[players.length - 1 - j %2];
            let result = await attacker.hit(victim, args[i]);
            if (result === 'end') {
                console.log('game is over');
                return;
            }
        }
    }
}
