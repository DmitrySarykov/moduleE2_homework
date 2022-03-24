let arr = [5,5,5,5];

let result = arr.reduce(function(similar, item, index, array){ // Перебор каждого элемента массива
    
    // Изначально надеемся, что все элементы массива равны между собой (similar = true)
    
    for (let i = 0; i < arr.length; i = i + 1) { // Цикл сравнения для каждого элемента массива с другими 
        
        // Проверка равенства и типа элемента с другим
        
        similar = arr[index] === arr[i] ? true : false;
        
        /* 
        Если какие-то элементы не равны между собой, 
        Значит уже есть несовпадение одного элемента
        Поэтому в массиве не все элементы равны (false)
        */

        if (similar == false){
            break; // Выход из цикла
        }
    }
    return similar;

},true);

console.log(result);


