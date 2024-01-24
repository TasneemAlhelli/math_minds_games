/* GLOBAL VARIABLES */

/* FUNCTIONS */
// evaluateAns function to check the correctness of the answer
const evaluateAns = (btn, eq) => {
  let answer = parseInt(btn.textContent)
  if (answer == correctAnswer) {
    // check timing
    let answerIn = eqDisplayTime - timer

    // increase total correct answer
    totalCorrectAns++

    // channe background color
    btn.style.backgroundColor = 'green'

    // increase timer
    timer += 5
    setTimer()

    // record score
    if (answerIn > 5) {
      // score +
      score += 3
    } else {
      score += eq.points
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
    // terminate game
    terminateGame(btn, 'GAME OVER')
  }
}

// displayEquation function to display the equation with four different options
const displayEquation = () => {
  // check list length
  if (list.length === 0) {
    terminateGame(null, 'CONGRATULATIONS! YOU WON!')
  }

  // get random equation
  let random = Math.floor(Math.random() * list.length)
  const eq = list.splice(random, 1)[0]

  // display equation and answers
  eqSection.innerHTML = `${eq.equation} = ?`
  optionSection.innerHTML = ''

  eq.options.forEach((option) => {
    const btn = document.createElement('button')
    btn.textContent = option
    // add event listner
    btn.addEventListener('click', () => {
      evaluateAns(btn, eq)
    })

    optionSection.appendChild(btn)
  })

  // set equation display time
  eqDisplayTime = timer

  // set correct answer
  correctAnswer = eq.correct
}

/* EVENT LISNTERS */
playBtn.addEventListener('click', () => {
  // display game
  instructionSection.style.display = 'none'
  gameSection.style.display = 'grid'

  // Run the Game
  getList()
  displayEquation()
  setTimer()
  gameTimer = setInterval(startGame, 1000)
})
