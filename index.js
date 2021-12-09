// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 
  
  
// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.

const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const title = document.getElementById("title")
const body = document.getElementById("deck-the-halls")
const border = document.getElementById("border")
const emojiTitle = document.getElementById("emoji-title")
const bellEl = document.getElementById("bell")
const presentEl = document.getElementById("present")
const treeEl = document.getElementById("tree")
const snowmanEl = document.getElementById("snowman")

decorator.addEventListener("click", deckTheHalls)




bellEl.addEventListener("click", function() {
  house.textContent += '🔔'
})
presentEl.addEventListener("click", function() {
  house.textContent += '🎁'
})
treeEl.addEventListener("click", function() {
  house.textContent += '🎄'
})
snowmanEl.addEventListener("click", function() {
  house.textContent += '☃️'
})

const audio = new Audio('audio/needalittlechristmas.mp3')

function addOpacity() {
   title.classList.remove('opacity-off')
  border.classList.remove('opacity-off')
  emojiTitle.classList.remove('opacity-off')
  bellEl.classList.remove('opacity-off')
  presentEl.classList.remove('opacity-off')
  treeEl.classList.remove('opacity-off')
  snowmanEl.classList.remove('opacity-off')
}
function removeOpacity() {
  title.classList.add('opacity-off')
  border.classList.add('opacity-off')
  bellEl.classList.add('opacity-off')
  presentEl.classList.add('opacity-off')
  treeEl.classList.add('opacity-off')
  snowmanEl.classList.add('opacity-off')
  emojiTitle.classList.add('opacity-off')
}

// Change theme
function deckTheHalls() {
  if (decorator.checked) {
    audio.play()
    audio.volume = 0.4
    body.classList.add('deck-the-halls')
    title.textContent = 'Happy Holidays'
    house.textContent = '🎄 🏡 🎁'
    removeOpacity()
  } else {
    audio.pause()
    body.classList.remove('deck-the-halls')
    house.textContent = '🏡'
    addOpacity()
  }
}








