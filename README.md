# Factorial-Calculator

## Description
Calculates factorial values.

##Code
the code itself is simple math
<<<<<<< HEAD
'''javascript
=======

```javascript
>>>>>>> 7c0c4a74cf47b0ca4b6cc1bc172bf0556ef68e93
var facArray = [];
var fac = 0;
var facValue = 0;
function start(){
    getFactorial();
    findFacMultiples();
    findFacValue();
    println(fac);
    println(facArray);
    print(facValue);
}
function getFactorial(){
    fac = readInt("What is your factorial?");
}
function findFacMultiples(){
    for(var i = 1; i <= (fac); i++){
        facArray.push(i);
    }
}
function findFacValue(){
    var product = 1;
    for(var i = 0; i < facArray.length; i++){
        product = product * facArray[i];}
        facValue = product;
}
```
