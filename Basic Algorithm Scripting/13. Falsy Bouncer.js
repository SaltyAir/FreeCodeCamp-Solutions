function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


// Second solution
//
// function bouncer(arr) {
//     arr = arr.filter(isTrue);
//     return arr;
//     
//     function isTrue(val) {
//         return Boolean(val) === true;
//     }
// }
// 
// bouncer([7, "ate", "", false, 9]);