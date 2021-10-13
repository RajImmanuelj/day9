const http=require('http')
console.log(http)
const server=http.createServer((request,response)=>{
  console.log(request.url)
})
console.log(server)
server.listen(3000,()=>{
  console.log(`server listening at PORT:${3000}`)
})