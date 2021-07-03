function factorial(n){
    if(n===1){
        return n;
    }else{
        return n * factorial(n-1);
    }
}
/* function start(){
    var fac = getFactorial();
    var facArray = findFacMultiples(fac);
    var facValue = findFacValue(facArray);
    console.log(fac);
    console.log(facArray);
    field.output.value = facValue;
}
//gets a number to use as a factorial and returns it
function getFactorial(){
    var factorial = field.input.value
    return factorial;
}
//adds every non-negative whole number into an array and returns it
function findFacMultiples(num){
    var arr = []
    for(var i = 1; i <= num; i++){
        arr.push(i);
    }
    return arr
}
//takes array of numbers and multiplies all of them by each other then returns final value
function findFacValue(arr){
    var value = 1;
    for(var i = 0; i < arr.length; i++){
        value *= arr[i];
    }
    return value;
}
