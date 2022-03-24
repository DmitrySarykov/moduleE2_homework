let num = prompt("Введите число");

num = +num; // Преобразование num в число

if (typeof num === 'number' && isNaN(num) == false){ // Если num = число И не равно NaN
    
    if (num % 2 == 0){ 
        console.log("Число четное");
    } else{ 
        console.log("Число нечетное");
    }
    
} else{
    console.log("Упс, кажется, вы ошиблись!")
}