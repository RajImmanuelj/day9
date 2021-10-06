let value=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello')
    },1000)
})
console.log(value)
setTimeout(()=>{
    console.log(value)
},2000)