
/** Truthy and Falsy Value */

console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('')) //false
console.log(Boolean('sakar')) // true
console.log(Boolean({})) //true

/** Program */

const money = 0

if (money) {
    console.log("Aaj Party meri taraf se")
}
else {
    console.log('Wallet ghar mai birsexu')
}

/** For undefined */
let height
if (height) {
    console.log('Height is defined')
}
else {
    console.log('Height is undefined')
}

/** Dolphin */
const scoreDolphins = (91 + 112 + 81) / 3
const scoreKoala = (91 + 90 + 81) / 3

if (scoreDolphins > scoreKoala && scoreDolphins >= 100) {
    console.log("Dolphin win")
}
else if (scoreKoala >= 100 & scoreKoala > scoreDolphins) {
    console.log("scorekoala win")
}
else if (scoreKoala === scoreDolphins && scoreDolphins >= 100 & scoreKoala >= 100) {
    console.log("Both win")
}
else {
    console.log("No one wins")
}
