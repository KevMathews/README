// console.log($)

class Player {
    constructor(name){
        this.health = 100;
        this.energy = 100;
        this.armor = 5;
        this.name = name;
        this.accuracy = .8;
        this.damage = 20;
    }
    
    attack(){
        if ((Math.random() < player.accuracy)) {
            let damageDone = this.damage - boss.enemy[currentEnemy].armor;
            console.log(`${player.name} does ${damageDone} to ${boss.enemy[currentEnemy].name}`);
            boss.enemy[currentEnemy].health -= damageDone;
            checkIfDead();

            } else {console.log('miss')};
    }
    
    
}

class Enemy {
    constructor(){
        this.energy = 50;
        this.health = 30;
        this.armor = 2;
        this.accuracy = .5;
    }
    attack() {
        console.log(`${this.name} attacks for 5 health`);
    }
}

class EnemyBoss {
    constructor(){
        this.enemy = [];
        this.name;
    }
    createEnemies(i){
        const newEnemy = new Enemy(i);
        this.enemy.push(newEnemy);
    }
}

let checkIfDead = function(){
    if (boss.enemy[currentEnemy].health <= 0){
        console.log(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
        currentEnemy ++;
        reportedEnemy ++;
    } else {

    }
}
const player = new Player('Kevin');
const boss = new EnemyBoss();
boss.createEnemies(1);
boss.createEnemies(2);
boss.createEnemies(3);
boss.createEnemies(4);
boss.createEnemies(5);

let currentEnemy = 1;
let reportedEnemy = 2;


console.log(boss);
console.log(boss.enemy);
console.log(boss.enemy[1]);
boss.enemy[1].name = 'craig';
console.log(boss.enemy[1]);
boss.enemy[1].attack();
boss.enemy[2].shieldBash = function(){
    console.log(`${this.name} bashes you for 3 damage`)
}
boss.enemy[2].name='fred';
boss.enemy[2].attack();
boss.enemy[2].shieldBash();
player.attack();
player.attack();
player.attack();
player.attack();
console.log(boss.enemy[currentEnemy]);
//  add random numbers to each boss.enemy[1] to improve its stats

//  have attack method added for each boss.enemy[i]
//  add method to each boss.enemy[i] that allows it to random through its it's available attacks that were added.  so boss 1 attack boss 2, 2 attacks etc etc