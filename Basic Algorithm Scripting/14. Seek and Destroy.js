function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);