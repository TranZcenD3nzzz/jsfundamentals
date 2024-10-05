
const randomSentence = "lorem15 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";

function add(num1, num2) {
    console.log('------inside add function------');
    console.log("randomSentence:", randomSentence);
    return num1 + num2;
}

function greet() {
    console.log('------inside greet function------');
    console.log("randomSentence:", randomSentence);
    console.log('Hello World! ');
}

greet();
const sum = add(6, 6);
console.log('sum :', sum);

function isLastDigitEven(sum) {
    const lastDigit = sum % 10;

    if (lastDigit % 2 === 0) {
        console.log(`The last digit (${lastDigit}) of ${sum} is even.`);
        return true;
    } else {
        console.log(`The last digit (${lastDigit}) of ${sum} is not even.`);
        return false;
    }
}

isLastDigitEven(sum);