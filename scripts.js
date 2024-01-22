/** GLOBAL VARIABLES */
const easyList = Equation.easy
const intermediateList = Equation.intermediate
const advanceList = Equation.advance

const eqSection = document.querySelector('.equation')
const optionSection = document.querySelector('.options')
const scoreEl = document.querySelector('#score')
const levelEl = document.querySelector('#level')
const timerEl = document.querySelector('#timer')
const playBtn = document.querySelector('#playBtn')
const instructionSection = document.querySelector('.instructionSection')
const gameSection = document.querySelector('.gameSection')

let level = ''
let list = []
let correctAnswer = 0
let score = 0
let timer = 20
let gameTimer = null

/** FUNCTIONS */
const setTimer = () => {
  const mins = Math.floor(timer / 60)
  let secs = timer % 60
  let time = mins > 0 ? `${mins}:${secs}` : secs
  timerEl.innerHTML = time
  if (timer <= 10) {
    timerEl.style.color = 'red'
  }
}

const startGame = () => {
  // decrease time
  timer--

  // check if time over
  if (timer < 0) {
    terminateGame(null, 'TIME IS UP!')
  } else {
    // display timer
    setTimer()
  }
}

const terminateGame = (btn = null, msg) => {
  // stop timer
  clearInterval(gameTimer)

  // change btn color
  if (btn) {
    btn.style.backgroundColor = 'red'
  }

  // show message
  levelEl.innerHTML = msg

  // disable buttons
  Array.from(optionSection.children).forEach((btn) => {
    btn.style.pointerEvents = 'none'
  })
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

  levelEl.innerHTML = `${level.toUpperCase()}`
}

/** EVENT LISNTERS */
