const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]
const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const result=document.querySelector('.result')
console.log(result)

const sum=()=>{
  const add=parseInt(a.value)+parseInt(b.value)
  result.innerHTML=add
}
add.addEventListener('click',sum)

const mul=()=>{
  const product=parseInt(a.value)*parseInt(b.value)
  result.innerHTML=product
}
multiply.addEventListener('click',mul)