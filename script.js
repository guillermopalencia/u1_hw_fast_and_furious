let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  const newText = document.getElementById('main-title')
  newText.innerText = "Hi there I'm Dom Toretto"

  // Part 2
  const newBody = document.querySelector('body')
  newBody.style.backgroundColor = '#A9EED1'
  // Part 3
  const rmove2 = document.getElementById('favorite-things').children
  rmove2[5].remove()

  // Part 4
  document.getElementsByClassName('')

  // Part 5
  const rmove = document.getElementById('past-races').children
  rmove[3].remove()

  // Part 6
  const newLi = document.createElement('li')
  const text = document.createTextNode('Atlanta')
  newLi.appendChild(text)
  document.getElementById('past-races').appendChild(newLi)

  // Part 7
  const newDiv = document.createElement('div')
  const newH = document.createElement('h1')
  const newP = document.createElement('p')
  newDiv.className = 'blog-post'
  newDiv.style.backgroundColor = 'rebeccapurple'
  newH.innerText = 'Atlanta'
  newP.innerText = 'I did donuts in a police station parking lot'
  newP.style.color = 'black'
  newDiv.appendChild(newH)
  newH.appendChild(newP)
  document.querySelector('.main').appendChild(newDiv)
}
