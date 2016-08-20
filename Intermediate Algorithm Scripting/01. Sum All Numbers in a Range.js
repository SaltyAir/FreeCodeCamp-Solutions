function sumAll(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var tmp = 0;
    for (var i = min; i <= max; i++) {
        tmp = tmp + i;
    }
    return tmp;
}

sumAll([1, 4]);



// Second solution
//
// function sumAll(arr) {
//     var groessteNum = Math.max.apply(null, arr);
//     var kleinsteNum = Math.min.apply(null, arr);
//     var bereich = groessteNum - kleinsteNum;
//     var ergebnis = 0;
//     for (var i = 1; i < bereich; i++) {
//         ergebnis = ergebnis + kleinsteNum + i;
//     }
//     ergebnis = ergebnis + groessteNum + kleinsteNum;
//     return ergebnis;
// }
//
//
// sumAll([1, 4]);
