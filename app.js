let car = {
    name: "C Class",
    manufacturer: "Mercedes",
    print:  ()=> {
        console.log(this)
        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}

console.log(Object.keys(car))
console.log(Object.values(car))
var data = fetch('https://jsonplaceholder.typicode.com/todos/10')

console.log(data)

