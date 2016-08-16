function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var counter = 0;
    while (counter < arr.length) {
        newArr.push(arr.slice(counter, counter + size));
        counter = counter + size;
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
