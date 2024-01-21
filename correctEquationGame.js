/* GLOBAL VARIABLES */
const ansBtns = document.querySelectorAll('.ansBtn')

/* FUNCTIONS */
const displayEquation = () => {
  console.log('displayEquation')
  // get random equaition
  let random = Math.floor(Math.random() * list.length)
  const eq = list.splice(random, 1)[0]

  // get random answer
  let randomAns = Math.floor(Math.random() * eq.options.length)
  const ans = eq.options[randomAns]
  let eqStatment = `${eq.equation} = ${ans}`

  // display equation and answers
  eqSection.innerHTML = eqStatment

  // set correct answer
  correctAnswer = ans == eq.correct
  console.log('correct answer: ', correctAnswer)
}

const evaluateAns = (btn) => {
  const answer = JSON.parse(btn.value)
  if (answer == correctAnswer) {
    // increase timer
    timer += 5
    setTimer()

    // record score
    score += 10
    if (
      (score >= 100 && level === 'easy') ||
      (score >= 300 && level === 'intermediate')
    ) {
      getList()
    }

    // display next equation
    displayEquation()
  } else {
    terminateGame()
  }
}

/* EVENT LISNTERS */
console.log(ansBtns)
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
