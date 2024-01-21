/* GLOBAL VARIABLES */

/* FUNCTIONS */
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

    // display next equation
    displayEquation()
  } else {
    // terminate game
    terminateGame(btn)
  }
}

const displayEquation = () => {
  // get random equation
  let random = Math.floor(Math.random() * list.length)
  const eq = list.splice(random, 1)[0]

  // display equation and answers
  eqSection.children[0].innerHTML = eq.equation
  if (document.URL.includes('equationGame.html')) {
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
  }
  // set correct answer
  correctAnswer = eq.correct
  console.log(correctAnswer)
}

/* EVENT LISNTERS */

// Run the Game
getList()
displayEquation()
setTimer()
gameTimer = setInterval(startGame, 1000)