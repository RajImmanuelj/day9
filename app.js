const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]
const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const minus=document.querySelector('#sub')
const result=document.querySelector('.result')
console.log(result)

//const sum=()=>{
 // const add=parseInt(a.value)+parseInt(b.value)
//  result.innerHTML=add
//}
//add.addEventListener('click',sum)

//const mul=()=>{
 // const product=parseInt(a.value)*parseInt(b.value)
 // result.innerHTML=product
//}
//multiply.addEventListener('click',mul)
//instead of using two many functions we can use single function
const calculate = (event, operation) => {
  console.log(event.target)
  if (operation == 'add') {
      console.log('adding')
  } else if (operation == 'multiply') {
      console.log('multiply')
  }
  else if(operation=='sub'){
    console.log('sub')
  }
}


add.addEventListener('click', (event) => {
  calculate(event, 'add')
})
multiply.addEventListener('click', (event) => {
  calculate(event, 'multiply')
})
minus.addEventListener('click',(event)=>{
  calculate(event,'sub')
})
