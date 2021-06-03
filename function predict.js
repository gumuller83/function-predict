//1
function resetNegativos(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(resetNegativos([1,2,-1,-3]));


//2
function moverAdelante(arr){
    for(var i = 0; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=0;
    return arr;
}
console.log(moverAdelante([1,2,3]));

//3
function returnReverso(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(returnReverso([1,2,3]));

//4
function repetirValores(arr){
    var temp = [];
    for(var i = 0; i<arr.length; i++){
        temp.push(arr[i]);
        temp.push(arr[i]);
    }
    return temp;
}
console.log(repetirValores([4,"Ulysses", 42, false]));