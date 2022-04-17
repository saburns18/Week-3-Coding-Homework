
const ages = [3, 9, 23, 64, 2, 8, 93];

const first = ages [0];
console.log(first);

 const last = ages[ages.length - 1];
 console.log (last);

 console.log (last - first);

 ages.push (54);

 let sum = ages[0];
 for (let i = 1; i < ages.length; i++){
     sum = sum + ages[i]
 }
console.log (sum / ages.length);


const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let lengths = names.map(function(element) {
    return element.length;
});

console.log (lengths);

let sum2 = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
})

console.log (sum2);

console.log (sum2 / names.length);


let sum3 = lengths [0];
for (let i = 1; i < lengths.length; i++){
    sum3 = sum3 + lengths [i];
}

console.log (sum3 / lengths.length);

console.log (names.join(' '));


function repeatConcatWord(word, n) {
    var repeatedWord = "";
    while (n > 0) {
      repeatedWord += word;
      n--;
    }
        return repeatedWord;

    }
  console.log (repeatConcatWord("Hello", 3));


function createFullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log (createFullName('Stephanie', 'Burns'));

const numArray = []

function sumAryTrue(numArray){
    let sum = numArray[0];
    for (let i = 0; i < numArray.length; i++){
        sum = sum + numArray[i];
    }
    if (sum > 100){
    return sumAryTrue;
    }
}


var numbers = []
function average (){
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++){
     sum = sum + numbers[i];
 }
return average (sum / numbers.length);
}

var Ary1 = [];
var Ary2 = [];

function greatestAverage (Ary1, Ary2){
    let sum1 = Ary1 [0];
    let sum2 = Ary2 [0];
    for (let i = 1; i < Ary1.length; i++){
        sum1 = sum1 + Ary1[i];
    }
var average1 = sum1 / Ary1.length;

for (let i = 1; i < Ary2.length; i++){
    sum2 = sum2 + Ary2[i];
}
var average2 = sum2 / Ary2.length;
if (average1 > average2 || average2 > average1){
    return greatestAverage;   
}
}

var isHotOutside = 0;
var moneyInPocket = 0;

function willBuyDrink (isHotOutside, moneyInPocket){
while (isHotOutside > 80 && moneyInPocket > 10.50){
    return (true);
}
}


