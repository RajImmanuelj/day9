var heading = document.getElementById('heading')
var body=document.querySelector('body')


console.log(heading)

heading.innerHTML = "i was added by JS"
heading.style = "color:red;font-size:2rem"
heading.classList.add('five')
heading.classList.remove('one')
body.classList.remove('dark')

console.log(heading.classList)
