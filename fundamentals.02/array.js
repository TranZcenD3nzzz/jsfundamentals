const listOfNames = ['JM', 'Ivan', 'Estella', 'Peter'];
const functionArray = [function (){ }, function (){ }]
//When making an array, every elements inside it, all elements has position.
//The position of the elements is called index.
//The index always starts with 0.
//The index of the elements can be accessed by using the index number.

console.log(listOfNames[2]); //-> this is how we access an element in an array. (arrayName[index])

console.log('-----before modifying array-----');
console.log(listOfNames);

listOfNames[2] = 'Darrell'; //->this is how we modify an element in an array. (arrayName[index] = newValue)
console.log('-----after modifying array-----');
console.log(listOfNames);



// 3 methods (length, push, pop) to add and remove elements from an array.
console.log('-----length-----');
console.log(listOfNames.length); //-> length of the array.
console.log(listOfNames[listOfNames.length - 1]); //-> last element of the array.

console.log('-----push-----');
listOfNames.push('Virginia', 'Blanche', 'Marriel'); //-> add an element to the end of the array.
console.log(listOfNames);

console.log('-----pop-----');
listOfNames.pop(); //-> remove the last element of the array.
console.log(listOfNames);//->['JM', 'Ivan', 'Estella', 'Peter']



//array-Iteration
console.log('-----Iteration-----');
//for loop
for(const name of listOfNames){
    console.log(name);
}

const listOfNumbers =[2,3,4,5,'JM']
const squareOfNumbers = []

for (const number of listOfNumbers) {
    squareOfNumbers.push(number * number)
}

console.log('squareOfNumbers', squareOfNumbers);

//scenario for gilbert
const demographic = [88, 12, 58, 42, 67, 99, 1, 20, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number of demographic) {
    if (number === 20) {
        console.log('im here');
    }
}

const demographicTwo = [['gilbert', 18], ['JM', 16], ['Kimmy', 20]]

for (const person of demographicTwo) {
    for(const info of person){
        if (info === 20) {
            console.log(person);
        }
    }
}


//for loop - exclusive for array
for (let i = 0; i < 3; i++){
    console.log(demographic[i]);
}

//while loop

