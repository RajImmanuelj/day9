const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
const arr=[1,2,3,4,5]
const val=JSON.stringify(arr)
localStorage.setItem('coverted',val)
console.log(localStorage.getItem('val'))
