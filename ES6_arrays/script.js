

const boxes = document.querySelectorAll('.box');


//ES5
// querySelectorAll returns a NodeList, which we have to transform into an array using the slice method on
// the Array prototype + we set the NodeList to the 'this' value with the call method
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });



//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5
// for(var i = 0; i < boxesArr5.length; i++) {
    
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
    
//     boxesArr5[i].textContent = 'I changed to blue!';
    
// }



//ES6

// We can use const  in a for...of  loop, but not in a for...in  loop,
// since in the latter we do change the initial value in each iteration
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}




//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));