console.log('------logical operator------')
console.log('------AND operator------')

const isAdult = true;
const hasLicense = true;

const canDrive = isAdult && hasLicense; //&& all statements must be true
console.log('canDrive', canDrive);

console.log('------OR operator------')
const isStudent = false;
const hasJob = true;

const canApplyForLoan = isStudent || hasJob || canDrive; //|| at least one statement must be true

console.log('canApplyForLoan', canApplyForLoan);

console.log('------NOT operator------')
const isNotAdult = !isAdult;
console.log('isNotAdult', isNotAdult);

const isNotStudent = !isStudent;
console.log('isNotStudent', isNotStudent);
