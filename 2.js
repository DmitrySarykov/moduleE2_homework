let x = 25;

switch (typeof x){ // Определение типа x
    case 'number':
        console.log("x - число");
    break;
    
    case 'string':
        console.log("x - строка");
    break;
    
    case 'boolean':
        console.log("x - логическое");
    break;
    
    default:
        console.log("Тип x не определён");
}
