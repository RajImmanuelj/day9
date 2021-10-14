const express=require('express')
const app=express()
const verifier=(req,res,next)=>{
    console.log(req.method)
    next()
}
app.use(verifier)
app.get('/',(req,res)=>{
    res.send('hi')
})
app.post('/Login',(req,res)=>{
    res.send('Login')
})
app.post('/Signup',(req,res)=>{
    res.send('Signup')
})
app.listen(3000,()=>{
    console.log("server listening to port 3000")
})