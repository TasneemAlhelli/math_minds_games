/** GLOBAL VARIABLES */
const easyList = JSON.parse(window.localStorage.getItem('easyEqs'))
const intermediateList = JSON.parse(
  window.localStorage.getItem('intermediateEqs')
)
const advanceList = JSON.parse(window.localStorage.getItem('advanceEqs'))

const eqSection = document.querySelector('.equation')
const optionSection = document.querySelector('.options')
const scoreEl = document.querySelector('#score')
const timerEl = document.querySelector('#timer')

let level = ''
let list = []
let correctAnswer = 0
let score = 0
let timer = 20

/** FUNCTIONS */
const setTimer = () => {
  const mins = Math.floor(timer / 60)
  let secs = timer % 60
  let time = mins > 0 ? `${mins}:${secs}` : secs
  timerEl.innerHTML = time
}

const startGame = () => {
  // decrease time
  timer--

  // check if time over
  if (timer < 0) {
    console.log('game over')
  }

  // display timer
  setTimer()
}

const evaluateAns = (btn) => {
  let answer = parseInt(btn.textContent)
  if (answer == correctAnswer) {
    // increase timer
    timer += 5
    setTimer()

    // record score
    score += 10
    scoreEl.innerHTML = score
    if (
      (score >= 100 && level === 'easy') ||
      (score >= 300 && level === 'intermediate')
    ) {
      getList()
    }

    //display next equation
    displayEquation()
  } else {
    console.log('wrong')
  }
}

const getList = () => {
  if (score >= 0 && score < 100) {
    level = 'easy'
    list = easyList
  } else if (score >= 100 && score < 300) {
    level = 'intermediate'
    list = intermediateList

    // increase timer
    timer += 10
    setTimer()

    console.log('LEVEL CHANGED: INTERMEDIATE')
  } else {
    level = 'advance'
    list = advanceList

    // increase timer
    timer += 20
    setTimer()

    console.log('LEVEL CHANGED: ADVANCE')
  }
}

const displayEquation = () => {
  // get random equation
  let random = Math.floor(Math.random() * list.length)
  const eq = list.splice(random, 1)[0]

  // display equation and answers
  eqSection.children[0].innerHTML = eq.equation
  optionSection.innerHTML = ''
  eq.options.forEach((option) => {
    const btn = document.createElement('button')
    btn.textContent = option
    // add event listner
    btn.addEventListener('click', () => {
      evaluateAns(btn)
    })

    optionSection.appendChild(btn)
  })

  // set correct answer
  correctAnswer = eq.correct
  console.log(correctAnswer)
}
getList()
displayEquation()
setTimer()
setInterval(startGame, 1000)

/** EVENT LISNTERS */
