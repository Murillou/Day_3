const firstName = 'Murillo'
const lastName =  'Vinícius'
const country = 'Brasil'
const city = 'João Pessoa'
let age = 19 
let isMarried = false 
let year = new Date()

console.log(typeof firstName, typeof lastName, typeof country, 
    typeof city, typeof age, typeof isMarried, typeof year)

console.log('------OUTRA QUESTÃO------')

let num = '10'
let int = parseInt(num)
console.log(typeof int)

const check = '10' == 10
console.log(check)

const checkTwo = parseInt('9.8') == 10
console.log(checkTwo)

console.log('------OUTRA QUESTÃO------')
 
const firstTrue = 3 > 2
const secondTrue = 0 == 0
const treeTrue = '10' == 10 

console.log(firstTrue, secondTrue, treeTrue)

const firstFalse = 3 < 2
const secondFalse = 0 != 0
const treeFalse = '10' != 10

console.log(firstFalse, secondFalse, treeFalse)

console.log('------OUTRA QUESTÃO------')

const check1 = 4 > 3 // true
const check2 = 4 >= 3 // true
const check3 = 4 < 3 // false
const check4 = 4 <= 3 // false
const check5 = 4 == 4 // true
const check6 = 4 === 4 // false errei
const check7 = 4 != 4 // false
const check8 = 4 !== 4 // true errei
const check9 = 4 != '4' // false
const check10 = 4 == '4' // true
const check11 = 4 === '4' // false
const check12 = 'python'.length != 'jargon'.length // false

console.log(check1, check2, check3, check4, check5, check6, check7,
    check8, check9, check10, check11, check12)

console.log('------OUTRA QUESTÃO------')

const checagem1 = 4 > 3 && 10 < 12 // true
const checagem2 = 4 > 3 && 10 > 12 // false
const checagem3 = 4 > 3 || 10 < 12  // true
const checagem4 = 4 > 3 || 10 > 12 // true
const checagem5 = !(4 > 3) // false
const checagem6 = !(4 < 3) // true
const checagem7 = !(false) // true
const checagem8 = !(4 > 3 && 10 < 12) // false
const checagem9 = !(4 > 3 && 10 > 12) // true
const checagem10 = !(4 === '4') // false errei
const checagem11 = 'dragon' // false
const checagem12 = 'python' // false

console.log(checagem1, checagem2, checagem3, checagem4, checagem5,
    checagem6, checagem7, checagem8, checagem9, checagem10)

console.log(checagem11.indexOf('on'))
console.log(checagem12.indexOf('on'))


console.log('------OUTRA QUESTÃO------')

const now = new Date()
const years = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const day = now.getDay()
const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()
const secondsSince1970 = now.getTime()

console.log(`Estamos no dia ${day} da semana. 
A data de hoje é ${date}:${month}:${years}.
O horario exato é ${hours}:${minutes}:${seconds} e desde 1970: ${secondsSince1970} `)
