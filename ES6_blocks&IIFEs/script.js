// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//This throws an error, since in ES6 blocks work like IIFEs:
//console.log(a + b);

// this works, since in ES5 blocks don't protect the data they have inside:
console.log(c);


/*
// ES5 IIFE
(function() {
    var c = 3;
})();

/This throws an error, since in ES5 IIFEs protect the data they have inside:
//console.log(c);
*/
