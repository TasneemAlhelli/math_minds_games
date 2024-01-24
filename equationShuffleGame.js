/* GLOBAL VARIABLES */
let openCards = []
let totalMatched = 0
timer = 0

/* FUNCTIONS */
const startTimer = () => {}

const shuffleEquation = () => {
  let elements = []
  let shuffleList = Equation.easy
  for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random * shuffleList.length)
    let eq = shuffleList.splice(random, 1)[0]
    elements.push([eq.equation, 'eq'])
    elements.push([eq.correct, 'ans'])
  }
  elements.sort(() => Math.random() - 0.5)

  return elements
}

const displayEquation = () => {
  const elements = shuffleEquation()
  eqShuffleSection.innerHTML = ''
  elements.forEach((element) => {
    // create div
    const div = document.createElement('div')
    div.classList.add(element[1])
    div.innerHTML = element[0]

    // append div
    eqShuffleSection.appendChild(div)
  })
}

const matchCards = () => {
  let classes = [openCards[0].className, openCards[1].className]

  if (classes.includes('eq') && classes.includes('ans')) {
    let eq = openCards[classes.indexOf('eq')].innerText
    eq = eq.replace('×', '*')
    eq = eq.replace('÷', '/')
    let ans = openCards[classes.indexOf('ans')].innerText

    let correctAns = eval(eq)

    if (correctAns === parseInt(ans)) {
      // hide cards
      openCards[0].style.visibility = 'hidden'
      openCards[1].style.visibility = 'hidden'

      // increase total matched
      totalMatched++

      // increase score
      let answerIn = timer - eqDisplayTime
      if (answerIn > 5) {
        score += 3
      } else {
        score += 5
      }
      scoreEl.innerHTML = score

      // reset array and set equation display timer
      openCards = []
      eqDisplayTime = timer
    } else {
      // change background color
      openCards[0].style.backgroundColor = '#f2e2c4'
      openCards[0].style.pointerEvents = ''
      openCards[1].style.backgroundColor = '#f2e2c4'
      openCards[1].style.pointerEvents = ''

      openCards = []
    }
  } else {
    openCards[0].style.backgroundColor = '#f2e2c4'
    openCards[0].style.pointerEvents = ''
    openCards[1].style.backgroundColor = '#f2e2c4'
    openCards[1].style.pointerEvents = ''
    openCards = []
  }
}

const checkScore = () => {
  if (totalMatched == 8) {
    showSummary('YOU WON!')
  }
}

const clickedCard = (card) => {
  // add to open cards array
  openCards.push(card)
  card.style.pointerEvents = 'none'

  // change card color
  card.style.backgroundColor = '#b2653f'

  if (openCards.length == 2) {
    matchCards()
  }

  checkScore()
}

/* EVENT LISTNERS */
playBtn.addEventListener('click', () => {
  // display game
  instructionSection.style.display = 'none'
  gameSection.style.display = 'grid'

  displayEquation()
  Array.from(eqShuffleSection.children).forEach((card) => {
    card.addEventListener('click', () => {
      clickedCard(card)
    })
  })
  gameTimer = setInterval(() => {
    startGame('increase')
  }, 1000)
})
