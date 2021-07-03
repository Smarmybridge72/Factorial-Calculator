# Factorial-Calculator

## Description
Calculates factorial values.

##Code
the code itself is simple math

```javascript
function start(){
    var fac = getFactorial();
    var facArray = findFacMultiples(fac);
    var facValue = findFacValue(facArray);
    println(fac);
    println(facArray);
    print(facValue);
}

function getFactorial(){
    var factorial = readInt("What is your factorial?");
    return factorial;
}

function findFacMultiples(num){
    var arr = []
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr
}

function findFacValue(arr){
    var value = 1;
    for(var i = 0; i < arr.length; i++){
        value *= facArray[i];
    }
    return value;
}
```
