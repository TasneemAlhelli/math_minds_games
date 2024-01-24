/** GLOBAL VARIABLES */

// equations' lists
let easyList = Equation.easy
let intermediateList = Equation.intermediate
let advanceList = Equation.advance

// sections
const instructionSection = document.querySelector('.instructionSection')
const gameSection = document.querySelector('.gameSection')
const eqShuffleSection = document.querySelector('.equation-shuffle')
const scoreSection = document.querySelector('.scoreSection')
const eqSection = document.querySelector('.equation')
const optionSection = document.querySelector('.options')

// buttons
const playBtn = document.querySelector('#playBtn')
const playAgainBtn = document.querySelector('#playAgain')

// elemens
const scoreEl = document.querySelector('#score')
const levelEl = document.querySelector('#level')
const timerEl = document.querySelector('#timer')
const finalScoreEl = document.querySelector('#finalScore')
const totalCorrectAnsEl = document.querySelector('#totalCorrect')
const gameMsgEl = document.querySelector('#gameMsg')

// game variables
let list = []
let level = ''
let eqDisplayTime = 0
let timer = 10
let gameTimer = null
let score = 0
let correctAnswer = 0
let totalCorrectAns = 0
let currectEq = null
let windowsLocation = window.location.href
const intermediateLevel = 50
const advanceLevel = 100

/** FUNCTIONS */

// setTimer function to update the time on the page
const setTimer = () => {
  const mins = Math.floor(timer / 60)
  let secs = timer % 60
  let time = mins > 0 ? `${mins}:${secs}` : secs
  timerEl.innerHTML = time
  if (timer <= 10 && !windowsLocation.includes('equationShuffleGame.html')) {
    timerEl.style.color = 'red'
  }
}

// startGame function to calculate the time over the game
const startGame = (change = 'decrease') => {
  // decrease time
  if (change === 'increase') {
    timer++
  } else {
    timer--
  }

  // check if time over
  if (timer < 0) {
    terminateGame(null, 'TIME IS UP')
  } else {
    // display timer
    setTimer()
  }
}

// getRandomEquation function returns a rnadom eqaution
const getRandomEquation = () => {
  // check list length
  if (list.length === 0) {
    terminateGame(null, 'CONGRATULATIONS! YOU WON!')
  }

  // get random equation
  let random = Math.floor(Math.random() * list.length)
  return list.splice(random, 1)[0]
}

// showSummary function to display the summary after the game
const showSummary = (msg) => {
  // display section
  gameSection.style.display = 'none'
  scoreSection.style.display = 'grid'

  // display message
  gameMsgEl.innerHTML = msg

  // display score
  finalScoreEl.innerHTML = score

  // display total correct answer
  if (windowsLocation.includes('equationShuffleGame.html')) {
    totalCorrectAnsEl.innerHTML = timerEl.innerHTML
  } else {
    totalCorrectAnsEl.innerHTML = totalCorrectAns
  }
}

// terminateGame function to end the game
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

  // show summary
  showSummary(msg)
}

// getList function to get the equations list and change the level of the game
const getList = () => {
  if (score >= 0 && score < intermediateLevel) {
    level = 'easy'
    list = easyList
  } else if (score >= intermediateLevel && score < advanceLevel) {
    level = 'intermediate'
    list = intermediateList

    // increase timer
    timer += 5
    setTimer()
  } else {
    level = 'advance'
    list = advanceList

    // increase timer
    timer += 5
    setTimer()
  }

  levelEl.innerHTML = `${level.toUpperCase()}`
}

// resetGame function to reset the game for next round
const resetGame = () => {
  // Get all equation lists
  easyList = Equation.easy
  intermediateList = Equation.intermediate
  advanceList = Equation.advance

  // reset the values
  correctAnswer = 0
  correctAnswer = 0
  score = 0
  timer = 10
  totalCorrectAns = 0

  if (windowsLocation.includes('equationShuffleGame.html')) {
    openCards = []
    totalMatched = 0
    timer = 0
  }

  // enable answer buttons
  if (!windowsLocation.includes('equationShuffleGame.html')) {
    Array.from(optionSection.children).forEach((btn) => {
      btn.style.pointerEvents = ''
      btn.style.backgroundColor = ''
    })
  }

  // Get List
  if (!windowsLocation.includes('equationShuffleGame.html')) {
    getList()
  }
  displayEquation()
  setTimer()
  if (windowsLocation.includes('equationShuffleGame.html')) {
    Array.from(eqShuffleSection.children).forEach((card) => {
      card.addEventListener('click', () => {
        clickedCard(card)
      })
    })
    gameTimer = setInterval(() => {
      startGame('increase')
    }, 1000)
  } else {
    gameTimer = setInterval(startGame, 1000)
  }

  // display the game
  scoreSection.style.display = 'none'
  gameSection.style.display = 'grid'
}

/** EVENT LISNTERS */
playAgainBtn.addEventListener('click', () => {
  resetGame()
})
