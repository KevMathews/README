// console.log($)
$playerHealth = $('.playerHealth');
$storeMessage = $('#storeMessage');
$playerGold = $('.playerGold');
$playerArmor = $('.playerArmor');
$playerAccuracy = $('.playerAccuracy');
$playerDualWield = $('.playerDualWield');
$playerDualWieldAccuracy = $('.playerDualWieldAccuracy');
$playerText = $('#playerCombatText');
$enemyText = $('#enemyCombatText');
$bossName =$('.bossName');
$bossHealth = $('.bossHealth');
$bossArmor = $('.bossArmor');
$dualWield = $('#dualWield');
$progressBar = $('.progress-bar');
$enemyPicture = $('#enemyPicture');
$playerPicture =$('#playerPicture');

class Player {
    constructor(name){
        this.maxHealth = 200.00;
        this.health = 200.00;
        this.healthPercent = 100;
        this.energy = 100;
        this.armor = 5;
        this.name = name;
        this.accuracy = .8;
        this.dualWieldAccuracy = .8;
        this.damage = 20;
        this.gold = 0;
        this.dualWield = 'Not Learned';
    }
    dualWieldAttack() {
        let randomNumber = Math.random();
        if (randomNumber <= player.dualWieldAccuracy){
            let damageDone = (this.damage * 2) - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} strikes ${boss.enemy[currentEnemy].name} twice for a total of ${damageDone} damage`);
            boss.enemy[currentEnemy].health -= damageDone;
            player.displayStats();
            checkIfDead();
        }else {
            $playerText.text(`${player.name} completely misses ${boss.enemy[currentEnemy].name} with their Dual Wield Attack`);
            checkIfDead();
        }
    }

    attack(){
        let randomNum = Math.random();
        if (randomNum < player.accuracy) {
            let damageDone = this.damage - boss.enemy[currentEnemy].armor;
            $playerText.text(`${player.name} does ${damageDone} to ${boss.enemy[currentEnemy].name}`);
            boss.enemy[currentEnemy].health -= damageDone;
            $playerPicture.attr('src', 'https://i.imgur.com/yaOdv5D.gif');
            
            setTimeout(
                function() 
                {
                    player.displayStats();
                }, 1600);
            
            checkIfDead();
            
            }else{
                $playerPicture.attr('src', 'https://i.imgur.com/yaOdv5D.gif');
                setTimeout(
                    function() 
                    {
                        player.displayStats();
                    }, 1600);
                $playerText.text(`${player.name} misses ${boss.enemy[currentEnemy].name}`);
            
            checkIfDead();
        }
    }
    displayStats() {
        $storeMessage.empty();
        $playerHealth.empty();
        $playerHealth.text(player.health);
        $progressBar.empty();
        $progressBar.text(player.health);
        $playerGold.empty();
        $playerGold.text(player.gold);
        $playerArmor.empty();
        $playerArmor.text(player.armor);
        $playerAccuracy.empty();
        $playerAccuracy.text(player.accuracy);
        $playerDualWield.empty();
        $playerDualWield.text(player.dualWield);
        $playerDualWieldAccuracy.empty();
        $playerDualWieldAccuracy.text(player.dualWieldAccuracy);
        $bossHealth.empty();
        $bossHealth.text(boss.enemy[currentEnemy].health);
        $bossArmor.empty();
        $bossArmor.text(boss.enemy[currentEnemy].armor);
        $bossName.empty();
        $bossName.text(boss.enemy[currentEnemy].name);
        if (this.dualWield == 'Learned'){
            $dualWield.css('display', 'inline-block');
        }

    }
    
}

class Enemy {
    constructor(){
        this.energy = 50;
        this.maxHealth = 30;
        this.health = 30;
        this.armor = 2;
        this.accuracy = .5;
        this.damage = 10;
        this.weapon1 = true;
        this.weapon2 = false;
        this.weapon3 = false;
        this.weapon4 = false;
        this.weapon5 = false;
    }
    enemy5Attack(){
        if (Math.random() < .5){
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            $enemyText.text(`${this.name} hits ${player.name} for ${damageDone} damage with weapon 5!`);
            player.displayStats();
                }else if (Math.random() >= .5) {
                this.lightningBolt();
                player.displayStats();
        }
    }
    enemy4Attack(){
        if (Math.random() < .5){
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            $enemyText.text(`${this.name} hits ${player.name} for ${damageDone} damage with weapon 4!`);
            player.displayStats();
                }else if (Math.random() >= .5) {
                this.lightningBolt();
                player.displayStats();
        }
    }
    enemy3Attack(){
        if (Math.random() < .3){
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            $enemyText.text(`${this.name} hits ${player.name} for ${damageDone} damage with weapon 3!`);
            player.displayStats();
                }else {
                this.doubleAttack();
                player.displayStats();
            }
    }
    enemy2Attack(){
        if (Math.random() < .5){
            let damageDone = this.damage - player.armor;
            player.health -= damageDone;
            $enemyText.text(`${this.name} hits ${player.name} for ${damageDone} damage with weapon 2!`);
            player.displayStats();
                }else if (Math.random() >= .5) {
                this.shieldBash();
                player.displayStats();
        }
    }
    enemy1Attack(){
        if ((Math.random() < this.accuracy)){
        
        $enemyPicture.attr('src', 'https://i.imgur.com/XDgeSsr.gif');
        let damageDone = this.damage - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} hits ${player.name} for ${damageDone} damage with weapon 1!`);
        player.displayStats();
        setTimeout(
            function() 
            {
                $enemyPicture.attr('src', 'https://i.imgur.com/JCzJ4J4.gif');
            }, 2800);
            }else{
                $enemyText.text(`${this.name} misses ${player.name}`);
                $enemyPicture.attr('src', 'https://i.imgur.com/JCzJ4J4.gif');
    }};
    //  was caught up here trying to figure out why my enemyHit()was working spent like for 45 ish mins and it was because of a single = instead of a double == argh!!! :(
    enemyHit () {
        if(this.weapon2 == true){
            this.enemy2Attack();
        }else if (this.weapon3 == true){
            this.enemy3Attack();
        }else if (this.weapon4 == true){
            this.enemy4Attack();
        }else if (this.weapon5 == true){
            this.enemy5Attack();
        }else {
            this.enemy1Attack();
        }
    }
    lightningBolt(){
        let damageDone = (this.damage * 2.5) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} hits you with a bolt of lightning for ${damageDone}`);
        player.displayStats();
    }
    doubleAttack(){
        let damageDone = (this.damage * 2) - player.armor;
        player.health -= damageDone;
        $enemyText.text(`${this.name} attacks you twice for ${damageDone}`);
        player.displayStats();
    }
    shieldBash(){
        $enemyText.text(`${this.name} bashes you for 7 damage`);
        let damageDone = 7 - player.armor;
        player.health -= damageDone;
        player.displayStats();
    }
    attack() {
        if ((Math.random() < this.accuracy)){
            this.enemyHit();
            }else {
                $enemyText.text(`${this.name} misses ${player.name}`);
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

// if 1 2 3 4 are dead and 5 

// let checkIfBoss5IsDead = function() {
//     if (boss.enemy[4].health <= 0){
//         currentEnemy = 4;
//         reportedEnemy = 5;
//         player.displayStats();
//         checkIfBoss4IsDead();
//     }else {
//         enemy5Attack();
//     }
// }

// let checkIfBoss4IsDead = function() {
//     if (boss.enemy[3].health <= 0){
//         currentEnemy = 4;
//         reportedEnemy = 5;
//         player.displayStats();
//         checkIfBoss5IsDead();
//     }else {
//         enemy4Attack();
//     }
// }

// let checkIfBoss3IsDead = function() {
//     if (boss.enemy[2].health <= 0){
//         currentEnemy = 3;
//         reportedEnemy = 4;
//         player.displayStats();
//         checkIfBoss4IsDead();
//     }else {
//         enemy3Attack();
//     }
// }

// let checkIfBoss2IsDead = function() {
//     if (boss.enemy[1].health <= 0){
//         currentEnemy = 2;
//         reportedEnemy = 3;
//         player.displayStats();
//         checkIfBoss3IsDead();
//     }else {
//         enemy2Attack();
//     }
// }
// let checkIfBoss1IsDead = function(){
//     if (boss.enemy[0].health <= 0){
//         currentEnemy = 1;
//         reportedEnemy = 2;
//         player.displayStats();
//         checkIfBoss2Dead();
//     }else{
//         enemy1Attack();
//     }
// }

let checkIfDead = function(){
    if (boss.enemy[4].health <= 0){
        player.displayStats();
        /// load boss 5 death gif here with timeout
        // load celebratory player image with timeout//
        // reset game button popsup 
        console.log(`you have won!`);
        
            }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 3){
            // load boss 4 death gif here with settimout
            $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
            currentEnemy ++;
            reportedEnemy ++;
            player.gold += 20;
            console.log(player);
            player.displayStats();
            upgradeStore();
                }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 2){
                // load boss 3 death gif here with settimeout
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                upgradeStore();
                }else if(boss.enemy[currentEnemy].health <= 0 && currentEnemy == 1){
                // load boss 2 death gif here with settimeout
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                upgradeStore();
                }else if(boss.enemy[0].health <= 0 && currentEnemy == 0){
                // load boss 1 death gif here with settimeout
                $enemyText.text(`${boss.enemy[currentEnemy].name} has been defeated by ${player.name}! But look out because ${boss.enemy[reportedEnemy].name} is approaching!`);
                currentEnemy ++;
                reportedEnemy ++;
                player.gold += 20;
                console.log(player);
                player.displayStats();
                setTimeout(
                    function() 
                    {
                        $enemyPicture.attr('src', 'https://i.imgur.com/aP42Ky8.gif');
                    }, 1800);
                upgradeStore();
                } else {
                    // might need a settimeout here to delay from player to enemy attack animation and text
                    boss.enemy[currentEnemy].enemyHit();
                    console.log(boss.enemy[currentEnemy]);
    }
}



boss.enemy[0].name='enemy1';
boss.enemy[1].weapon2 = true;
boss.enemy[1].name = 'enemy2';
boss.enemy[1].damage = 20;
boss.enemy[1].health = 40;
boss.enemy[1].armor = 5;
boss.enemy[2].weapon3 = true;
boss.enemy[2].name = 'enemy3';
boss.enemy[2].damage = 20;
boss.enemy[2].health = 50;
boss.enemy[2].armor = 8;
boss.enemy[3].name='enemy4';
boss.enemy[3].damage = 40;
boss.enemy[3].health = 50;
boss.enemy[3].weapon4 = true;
boss.enemy[3].armor = 11;
boss.enemy[4].name='enemy5';
boss.enemy[4].damage = 60;
boss.enemy[4].health = 70;
boss.enemy[4].weapon5 = true;
boss.enemy[4].armor = 14;



///  upgrade store modal
$('#upgradeStore').on('click', () => {
    document.getElementById("myModal").style.display = "block";
})

// let upgradeStore = function() {
//     document.getElementById("myModal").style.display = "block";
// }
//  purchase health bonus from store

$('#buyHealthUpgrade').on('click', () => {
    if (player.gold >= 10 ){
            player.health += 5;
            player.gold -= 10;
            player.displayStats();
        }else {
        $storeMessage.text(`Sorry you don\'t have enough Gold to buy a Health upgrade`);
        }});

$('#buyArmorUpgrade').on('click', () => {
    if (player.gold >= 10 ){
        player.armor += 2;
        player.gold -= 10;
        player.displayStats();
            }else {
                $storeMessage.text(`Sorry you don\'t have enough Gold to buy an Armor upgrade`);
                }});        

$('#buyDualWield').on('click', () => {
    if (player.gold >= 30 ){
        player.gold -= 30;
        player.dualWield = 'Learned';
        player.dualWieldAccuracy = (player.accuracy / 2);
        $('.dualWieldAccuracy').css('display', 'inline-block');
        
        player.displayStats();
            }else {
                $storeMessage.text(`Sorry you don\'t have enough Gold to buy an the Dual Wield skill`);
                }});        


//  close upgrade store popup
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }

  //  player attack
$('#attack').on('click', ()=>{
    player.attack()
})

// player dual wield attack
$('#dualWield').on('click', ()=>{
    player.dualWieldAttack();
})