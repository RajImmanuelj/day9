const container=document.getElementById("app")
const content=React.createElement('div',{},[
  React.createElement('h1',{},'Hi!'),
  React.createElement('p',{},'lorem ipsum ')
])
ReactDOM.render(content,container)//we can have only one render method
