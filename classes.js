// console.log('i am running');

const person = {
    name: {
        first: 'Elyan',
        last: 'Kemble',
    },
    age: 32,
    location: {
        city: 'Garland',
        state: 'Texas',
        zip: 75040
    },
    occupation: 'Front-End Developer'
}

function introduce() {
    // the "this" is whatever you have called the function on
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
}

// console.log(person);
// console.log(`First name: ${person.name.first}`);

// this doesn't work because we have not linked this function to anything
//      and there are no parameters
// introduce();

// this is creating a person.introduce method that we can now use
//  and it is the function introduce() that we have already defined
person.introduce = introduce;

// this invokes the function because of the ()
// person becomes the "this" in the function introduce()
person.introduce();

// ***********          why use a class            **********
const cat1 = {
    name: 'Fred',
    eyes: 2,
    legs: 4,
    fur: "Orange",
    isAwake: true,
    isMoving: false,
    sleep () {
        this.isAwake = false;
    },
    wake () {
        this.isAwake = true;
    }, 
    sit () {
        this.isMoving = false;
    }, 
    walk () {
        this.isMoving = true;
    } ,
    speak () {
        console.log("Meow... ")
    }
}

// I am only accessing isAwake property right here
console.log(cat1.isAwake);
// in order to call sleep(), i need to start with the object variable name
// sleep() potentially changes that isAwake
cat1.sleep();
console.log(cat1.isAwake);
// in order to call wake(), i need to start with the object variable name
cat1.wake();
console.log(cat1.isAwake);

// cat1.speak() means when I go in to speak "this" will reference cat1
cat1.speak();























