const monstarHealth=document.querySelector("#monster-health");
      playerHealth=document.querySelector("#player-health");
      bonusLife=document.querySelector("#bonus-life");
      attackButton=document.querySelector("#attack-btn");
      strongAttack=document.querySelector("#strong-attack-btn");
      healButton=document.querySelector("#heal-btn");
      logButton=document.querySelector("#log-btn");
    console.log("hel",healButton)

const monsterAttackvalue=20;
      playerAttackvalue=15;
      strongMosterAttack=15;
      strongPlayerAttack=55;
      healValue=20;

const MODE_ATTACK="ATTACK";
const STRONG_ATTACK="STRONG_ATTACK"




const chooseValue=prompt("choose life for you and moster.",100);
let chooseLife=chooseValue;
const maxValue=100;

window.onload=()=>{
    playerHealth.value=chooseLife;
    monstarHealth.value=chooseLife;
}

const playersHealth=(damage)=>{
    let randomValue=Math.random()*damage;
    playerHealth.value=monstarHealth.value-randomValue;
}
const monstarsHealth=(damage)=>{
    let randomValue=Math.random()*damage;
    monstarHealth.value=monstarHealth.value-randomValue;
}

const reset=(maxValue)=>{
    playerHealth.value=maxValue;
    monstarHealth.value=maxValue;
    document.getElementById("bonus-life").style.display="inline-block";
    healButton.disabled=false;
}
const attackMode=(mode)=>{
    let monstervalue= mode == MODE_ATTACK ? monsterAttackvalue : strongMosterAttack;

    let playerValue=mode == STRONG_ATTACK ? playerAttackvalue : strongPlayerAttack;
    playersHealth(monstervalue);
    monstarsHealth(playerValue);
    if(monstarHealth.value<=0 && playerHealth.value>0 ){
        alert("you won");
        reset(maxValue)
    }else if(playerHealth.value<=0 && monstarHealth.value>0 ){
        alert("you lost");
        reset(maxValue)
    }
    else if(playerHealth.value==0 && monstarHealth.value==0){
        alert("draw");
        reset(maxValue)
    }

}

const normalAttack=(MODE_ATTACK)=>{
    attackMode(MODE_ATTACK)
}
const strongsAttack=(STRONG_ATTACK)=>{
    attackMode(STRONG_ATTACK)
}




attackButton.addEventListener("click",normalAttack.bind(this,MODE_ATTACK));
strongAttack.addEventListener("click",strongsAttack.bind(this,STRONG_ATTACK));
healButton.addEventListener("click",()=>{
    document.getElementById("bonus-life").style.display="none";
    playerHealth.value+=healValue;
    healButton.disabled=true;
})





