var arr=['hi','hello','goodmorning']
var callbackfunction=(a,b)=>console.log(a,b)
arr.forEach(callbackfunction)
//prints elements along with index

arr.forEach((element, index) => {
  console.log(element, index)
})
