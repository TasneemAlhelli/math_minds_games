/* GLOBAL VARIABLES */
const ansBtns = document.querySelectorAll('.ansBtn')

/* FUNCTIONS */
// displayEquation function to display the equation with four different options
const displayEquation = () => {
  // get random equation
  const eq = getRandomEquation()

  // get random answer
  let randomAns = Math.floor(Math.random() * eq.options.length)
  const ans = eq.options[randomAns]
  let eqStatment = `${eq.equation} = ${ans}`

  // display equation and answers
  eqSection.innerHTML = eqStatment

  // set currect equation
  currectEq = eq

  // set equation display time
  eqDisplayTime = timer

  // set correct answer
  correctAnswer = ans == eq.correct
}

// evaluateAns function to check the correctness of the answer
const evaluateAns = (btn) => {
  const answer = JSON.parse(btn.value)
  if (answer == correctAnswer) {
    // check timing
    let answerIn = eqDisplayTime - timer

    // increase total correct answer
    totalCorrectAns++

    // increase timer
    timer += 5
    setTimer()

    // record score
    if (answerIn > 5) {
      // score +
      score += 3
    } else {
      score += currectEq.points
    }
    scoreEl.innerHTML = score
    if (
      (score >= intermediateLevel && level === 'easy') ||
      (score >= advanceLevel && level === 'intermediate')
    ) {
      getList()
    }

    // display next equation
    displayEquation()
  } else {
    terminateGame(btn, 'GAME OVER')
  }
}

/* EVENT LISNTERS */
ansBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    evaluateAns(btn)
  })
})

// Run the game
playBtn.addEventListener('click', () => {
  // display game
  instructionSection.style.display = 'none'
  gameSection.style.display = 'grid'

  getList()
  displayEquation()
  setTimer()
  gameTimer = setInterval(startGame, 1000)
})
