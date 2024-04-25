// com o porder do protagonista o heroi "sempre" Ganha!!

const hero = {
    name: "Juh",
    level: "",
    xp: 0
};

const boss = {
    name: "First Boss",
    level: "",
    xpForKill: 0,
}


const level = [
    ["Ferro", 0],
    ["Bronze", 1001], 
    ["Prata", 2001], 
    ["Ouro", 5001], 
    ["Platina", 7001], 
    ["Ascendente", 8001], 
    ["Imortal", 9001], 
    "Radiante",10001]

function atualizaLevelHero(){
    for (var i = 0; i < level.length; i++){
        if ( level[i][1] <= hero.xp){
            hero.level = level[i][0];
        }
    }    
}

function creatBoss(){
    boss.xpForKill = parseInt(Math.random() * 10000);
    for (var i = 0; i < level.length; i++){
        if ( level[i][1] < boss.xpForKill){
            boss.level = level[i][0];
        }
    } 
}

function battle(){
    creatBoss();
    hero.xp = boss.xpForKill/2;
    atualizaLevelHero();
    console.log("O vilão "+ boss.name + ", de classe: " + boss.level);
    console.log("perdeu para")
    console.log("O Herói de nome "+ hero.name +", está no nível de " + hero.level);
}

battle();