const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.place.toLowerCase().includes(value) ||
      user.type.tolowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("startups.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const name = card.querySelector("[data-name]")
      const place = card.querySelector("[data-place]")
      const type = card.querySelector("[data-type]")
      name.textContent = user.name
      place.textContent = user.place
      type.textContent = user.type
      userCardContainer.append(card)
      return { name: user.name, place: user.place, type: user.type, element: card }
    })
  })
