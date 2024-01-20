/** GLOBAL VARIABLES */
const easyList = JSON.parse(window.localStorage.getItem('easyEqs'))
const intermediateList = JSON.parse(
  window.localStorage.getItem('intermediateEqs')
)
const advanceList = JSON.parse(window.localStorage.getItem('advanceEqs'))

const eqSection = document.querySelector('.equation')
const optionSection = document.querySelector('.options')
let correctAnswer = 0

/** FUNCTIONS */
const evaluateAns = (btn) => {
  let answer = parseInt(btn.textContent)
  if (answer == correctAnswer) {
    console.log('correct')
    //display next equation
    displayEquation()
  } else {
    console.log('wrong')
  }
}

const displayEquation = () => {
  // get random equation
  let random = Math.floor(Math.random() * easyList.length)
  const eq = easyList[random]

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
displayEquation()

/** EVENT LISNTERS */
