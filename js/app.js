// console.log($)

class Player {
    constructor(name){
        this.health = 100;
        this.energy = 100;
        this.armor = 5;
        this.name = name;
        this.accuracy = .8;
        this.damage = 20;
        this.points = 0;
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
        this.damage = 10;
        this.weapon1 = true;
        this.weapon2 = false;
        this.weapon3 = false;
    }

   
//     attack() {
//         if ((Math.random() < this.accuracy)) {
//             // let damageDone = this.damage - player.armor;
//             // player.health -= damageDone;
//             // console.log(`${this.name} hits ${player.name} for ${damageDone} damage!`)
//             mainAttack();
//     }else{
//         console.log(`${this.name} swings and misses ${player.name}`)
//     }
// }
    shieldBash(){
    console.log(`${this.name} bashes you for 7 damage`);
    let damageDone = 7 - player.armor;
    player.health -= damageDone;
    }
    attack() {
    if (boss.enemy[currentEnemy].weapon2 = true && Math.random() < .3){
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            console.log(`${boss.enemy[currentEnemy].name} hits ${player.name} for ${damageDone} damage!`);
        }else if (this.weapon2 = true && Math.random() >= .3) {
            this.shieldBash();
        }else {
                let damageDone = this.damage - player.armor;
                player.health -= damageDone;
                console.log(`${this.name} hits ${player.name} for ${damageDone} damage!`)
        }
    
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
//  owned, cost, damage, armor, healing
const weaponsOwned = {
    item1: [1, 0, 20],
    item2: [0, 20, 30],
    item3: [0, 30, 40],
    item4: [0, 40, 50],
    item5: [0, 50, 60]
}
const player = new Player('Kevin');
const boss = new EnemyBoss();
boss.createEnemies(1);
boss.createEnemies(2);
boss.createEnemies(3);
boss.createEnemies(4);
boss.createEnemies(5);

let currentEnemy = 0;
let reportedEnemy = 1;

let checkIfDead = function(){
    if (boss.enemy[currentEnemy].health <= 0){
        console.log(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
        currentEnemy ++;
        reportedEnemy ++;
        player.points += 20;
    } else {

    }
}

boss.enemy[0].name='john';
boss.enemy[1].weapon2 = true;
boss.enemy[1].name = 'craig';
boss.enemy[1].damage = 20;
boss.enemy[1].health = 40;
console.log(boss.enemy[1].attack());
console.log(boss.enemy[1]);
// boss.enemy[1].bossAttack = function (){
//     if (Math.random() < .7){
//     mainAttack()

//     }else {
//         shieldBash();
//     }
// }
boss.enemy[2].name = 'fred';
boss.enemy[2].damage = 30;
boss.enemy[2].health = 50;
boss.enemy[3].name='jim';
boss.enemy[3].damage = 40;
boss.enemy[3].health = 50;
boss.enemy[4].name='tony';
boss.enemy[4].damage = 60;
boss.enemy[4].health = 70;


// console.log(boss.enemy[2].attack);
// boss.enemy[1].attack();

// console.log(boss.enemy[1]);
// console.log(boss.enemy[currentEnemy]);
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();

player.attack();
player.attack();
player.attack();
player.attack();
console.log(player);
console.log(boss.enemy[currentEnemy]);

boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
player.attack();
player.attack();
player.attack();
player.attack();
console.log(player);
console.log(boss.enemy[currentEnemy]);

boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
boss.enemy[currentEnemy].attack();
console.log(player);
//  add random numbers to each boss.enemy[1] to improve its stats

//  have attack method added for each boss.enemy[i]
//  add method to each boss.enemy[i] that allows it to random through its it's available attacks that were added.  so boss 1 attack boss 2, 2 attacks etc etc