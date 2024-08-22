const input = document.querySelector("#ingresoData")

input.addEventListener("keyup", (e) => {
  console.time('EventoKey')
  const { value } = e.target

  document.querySelector("#titulo").innerHTML = value
  console.timeEnd('EventoKey')
})

const buttons = document.querySelector("#buttons")
const texts = [ 'Ingresar', 'Registrarme', 'Cancelar' ]

/** Aproximación texto */
console.time('CreateButtons')
const createButton = (text) => {
  return `<button>${text}</button>`
}

texts.forEach(text => {
  const button = createButton(text)

  buttons.innerHTML += button
})
console.timeEnd('CreateButtons')

/** Aproximación Creando Nodos */
const buttonsContainer2 = document.querySelector("#buttons2")
console.time('CreateButtonsElement')
texts.forEach(text => {
  const button = document.createElement('button')
  button.textContent = text

  buttonsContainer2.appendChild(button)
})
console.timeEnd('CreateButtonsElement')