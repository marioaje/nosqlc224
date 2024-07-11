//module.exports = {frutas, dinero}
const {frutas, dinero} = require('./frutas')
console.log('frutas:')
console.log(frutas)
console.log('ingreso al foreach')
frutas.forEach( item => {
        console.log(item)
        console.count(item)
    }
)

console.log('Dinero')
console.log(dinero)