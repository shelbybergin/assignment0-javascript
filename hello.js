//Part one
//Use type conversion to print the length (number of digits) of an integer.
let num = 1001

console.log(String(num).length)

//Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numb = 123.45

console.log(String(numb).length)

//Modify your code to print out the length of a decimal value EXCLUDING the period.
console.log(String(numb).replace('.','').length)

//What if num could be EITHER an integer or a decimal? Add an if/else statement so your code can
//handle both cases. (Hint: Consider the indexOf() or includes() string methods).
if (String(numb).includes('.')) {
    console.log(String(numb).length-1)
} else {
    console.log(String(numb).length)
}

//Part two
//Use the trim() method to remove the leading and trailing whitespace, and then print the results.
//Change all of the letters in the dna string to UPPERCASE and print the result.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
dna = dna.trim().toUpperCase()
console.log(dna)
let dnaLength = dna.length

//Replace the sequence 'GCT' with 'AGG', and then print the altered strand.
console.log(dna.replace('GCT', 'AGG'))

//Look for the sequence 'CAT' with indexOf(). If found print, 'CAT found', otherwise print, 'CAT NOT found'.
if (dna.indexOf("CAT")) {
    console.log("CAT found")
} else {
    console.log("CAT NOT found")
}

//Use slice() to print out the fifth set of 3 characters (called a codon) from the DNA strand.
console.log(dna.slice(16,19))

//Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dnaLength} characters long`)

//Just for fun, apply methods to dna and use another template literal to print, 'taco cat'
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);

//Part 3
//Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'.
let jayS = "JavaScript"
console.log(jayS.slice(0,1) + jayS.slice(4,5))

//Without using slice(), use method chaining to accomplish the same thing.
let abbrev = jayS.charAt("0").toUpperCase() + jayS.charAt("4").toUpperCase()
console.log(abbrev)
//Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for "${jayS}" is "${abbrev}"`)

//Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(jayS.toLowerCase().toUpperCase().replace("SCRIPT", "skirt"))

//Use the string methods you know to print 'Title Case' from the string 'title case'.
let titleCase = "title case"

console.log(titleCase.replace('t', 'T').replace('c', 'C'))

