const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

button.addEventListener('click', (req, res) => {
    localStorage.setItem('InputValue', input.value)
    div.innerHTML = input.value
})

const save =localStorage.getItem('InputValue')
div.innerHTML = save

