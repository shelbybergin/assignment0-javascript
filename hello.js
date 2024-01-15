let num = 1001

console.log(String(num).length)

let numb = 123.45
let nump = 12345

console.log(String(numb).length)
console.log(String(numb).replace('.','').length)

if (String(numb).includes('.')) {
    console.log(String(nump).length-1)
} else {
    console.log(String(nump).length)
}

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
dna = dna.trim().toUpperCase()
console.log(dna)
let dnaLength = dna.length

console.log(dna.replace('GCT', 'AGG'))

if (dna.indexOf("CAT")) {
    console.log("CAT found")
} else {
    console.log("CAT NOT found")
}
console.log(dna.slice(16,19))

console.log(`The DNA strand is ${dnaLength} characters long`)

let jayS = "JavaScript"
console.log(jayS.slice(0,1) + jayS.slice(4,5))

//Without using slice(), use method chaining to accomplish the same thing.

let lang = "JavaScript"
let abbrev = "JS"

console.log(`The abbreviation for "${lang}" is "${abbrev}"`)


let titleCase = "title case"

console.log(titleCase.replace('t', 'T').replace('c', 'C'))

