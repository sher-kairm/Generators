//GENERATORS
const person = {name:'karim', age: 22, education: 'BS RS&GIS'}

for(const [key, value] of Object.entries(person)){
    
}
person[Symbol.iterator]= function*(){
    yield* Object.keys(this);
    yield* Object.values(this);
}
for(const b of person){
    console.log(b)
}

function* generateThings(){
    yield 'Hello World'
    const l = yield 'Hi'
    console.log(l)
    yield 'Hello'

    yield 'Hi'
    yield 'Hey'
    yield 'Hey!'
g.next()

const g = generateThings();
g.next('love')
}