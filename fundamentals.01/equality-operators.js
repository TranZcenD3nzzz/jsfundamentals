//USE CASE FOR EQUALITY OPERATORS
//1. Check if two values are equal - done
//2. Check if two values are not equal - done
//3. Check if two values are strictly equal - done
//4. Check if two values are not strictly equal - done
//5. Check if two values is greater than another - >
//6. Check if two values is less than another - <
//7. Check if two values is greater than or equal to another - >=
//8. Check if two values is less than or equal to another - <=

//1. Check if two values are equal
const value = 10;
const anotherValue = 10;
console.log('------loose equality------')
if (value == anotherValue) {
    console.log("value and anotherValue are equal");
}
console.log('------strict equality------')
if (value === anotherValue) {
    console.log("value and anotherValue are equal {strict}");
}


