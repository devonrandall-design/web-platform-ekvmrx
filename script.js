const bulbasaur = {
  hp: 16,
  attack: 7,
  moveOne: 40,
  moveTwo: ' ',
};

const charmander = {
  hp: 16,
  attack: 7,
  moveOne: 40,
  moveTwo: ' ',
};

const attackOne = document.querySelectorAll('[data-move]');

let enemyMaxHp = bulbasaur.hp;
let playerMaxHp = charmander.hp;

let enemyCurrentHp = bulbasaur.hp;
let playerCurrentHp = charmander.hp;

const getEnemyHp = document.querySelector('[data-active-hp="foe"]')

getEnemyHp.textContent = `Hp: ${enemyCurrentHp} / ${enemyMaxHp}`



attackOne.forEach(function(attack) {
attack.addEventListener('click', useAttack)
})

function useAttack() {
 

  let damage = charmander.attack * 7 - charmander.moveOne

  enemyCurrentHp = enemyMaxHp - damage;

  updateHP(enemyCurrentHp)

  console.log(`Charmander used tackle and did ${damage} damage` )

  function updateHP(CurrentHp) {

    const hpBar = document.querySelector('[data-hp="foe"]')

    
    getEnemyHp.textContent = `Hp: ${CurrentHp} / ${enemyMaxHp}`

    let hpPercent = Math.floor((CurrentHp / enemyMaxHp) * 100)



    setInterval(() => {
      const computedStyle = getComputedStyle(hpBar)
      let width = parseFloat(computedStyle.getPropertyPriority('--width')) 

      let currentPercent = 100 + '%'
  
      hpBar.style.setProperty('--width',  width - (1 + '%') )
  
      console.log(computedStyle)
  
    }, 5)

    
  

  }
  console.log(enemyCurrentHp);
}
