const fs=require('fs')

fs.writeFile('./test.txt','Hi',(error)=>{
  if(error)console.log(error)
})