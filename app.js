const fs=require('fs')

fs.readFile('./test.txt','utf-8',(error,data)=>{
  if (error) console.log(error) 
  else console.log(data) 
})
console.log('guest entry')