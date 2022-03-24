let arr = [21, 'dog', 36, 'cat', true]

console.log(arr.length); // Длина массива

arr.map(function(item, index, array){ // Вывод каждого элемента массива
    console.log(item);
});