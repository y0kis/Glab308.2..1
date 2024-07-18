//animals.js

// You need start by defining the class
//You do that with the "class" keyword
//everything in the curly braces defines my animal class 
class Animal {
    //constructor is what is run whenever I instatiate a class 
    // the construction sets the initial values for any properties that are in here
    constructor(nameParam, typeParam, eyesParam, furParam, legsParam, isAwakeParam, isMovingParam) {
        console.log('I am making a new animal');
        this.name = nameParam;
        this.type = typeParam;
        this.eyes = eyesParam;
        this.fur = furParam;
        this.legs = legsParam;
        this.isAwake = isAwakeParam;
        this.isMoving = isMovingParam;
    }
    // Defining the methods happens outside of thhe conctructor
    //these are al;l proto
// constructor
    sleep() {
        this.isAwake = false;
    }

    wake() {
        this.isAwake = true;
    }

    sit() {
        this.isMoving = false;
    }

    walk() {
        this.isMoving = true;
    }

    speak(sound) {
        console.log(`I am ${this.name}... ${sound}... `)
    }
}

//Another type of medthod is atatic methods
//    those 
//    they use "static" keyword

    //====================================================================
    //                   Vocabulary
    //  instance: an object created by a class
    //  instantiate: what you do to create a class object
    //  instantiation: process of creating an object
    //=======================================================================

    //use the "new" keyword when you instatiate a new class object
    // in this case, I'm going to make a variable that's an animal
    //  creat a variable, use the "new" keyword, and the class name followed by ()
    //  those parenthesis invoke the constructor
    //  this is INSTANTIATING the animal class 
    const v1 = new Animal(); 
     // this was used before we had parameters
//instatiate cat1, which is an instance of the Animal class
    // remember when you pass arguments in, that the order matters
//   (nameParam, typeParam)
const cat1 = new Animal("Fred", "cat", 2, "Orange", 4, true, false);
console.log(cat1);
console.log(cat1.name);
console.log(cat1.type);
// invoke the speak ()method for cat1
// BUT I need to pass in the parameter
cat1.speak('Meow')

const cat2 = new Animal("George", "cat", 2, "Black", 4, false, false);
const dog1 = new Animal("Penny", "dog", 2, "Gold", 4, true, false);
const cow1 = new Animal("Bessie", "cow", 2, "Brown", 4, true, true);

cow1.speak("Moo");

// make dog1 speak
// have cat2 wake up, you want console.log(isAwake) to show that it worked
//  we want to use one of the methods that exists
//      this method changes the property
cat2.wake();
//      but we need console.log(cat2.isAwake) to actually see it
console.log(cat2.isAwake);

// make dog1 speak
// have cat2 wake up, you want console.log(isAwake) to show that it worked
//  we want to use one of the methods that exists
//      this method changes the property
cat2.wake();
//      but we need console.log(cat2.isAwake) to actually see it
console.log(cat2.isAwake);

// ========== STATIC vs PROTOTYPE (or instance) methods
// we've already seen examples of prototype methods
//      this needs a variable that is an instance of the class
cat1.speak('Meow');
// they WILL NOT work on the class by itself
//      this won't work because Animal is the class not an instance
// Animal.speak('SOunds');

// static methods work the other way
// they work on class as whole, but not on a specific instance
Animal.fields();
// this won't work because cat1 is an object that is an instance of the Animal class
//      and fields() is a static method so only works on the class as a while
// cat1.fields();

// we've seen examples of static methods
// Math.random()

//===================================================================
//          Inheritance
// ====================================================================

// we can define a child class that is more specific than an existing class
//      but builds off of it.  That original class is called the parent class
// we need to add the keyword "extends" and then the class that we are building from
//  and in the constructor, we call the parent constructor by using the keyword "super"
class Cat extends Animal {
    constructor(nameParam, furParam, isAwakeParam, isMovingParam, isPetParam) {
        // super is calling the parent constructor, so I need to pass in the correct parameters
        super(nameParam, "cat", 2, furParam, 4, isAwakeParam, isMovingParam);
        this.isPet = isPetParam;
    }
    // outside of the constructor but inside class definition
    // I can take an existing method and change it for this child class
    speak() {
        // refer to the existing parent method of speak()
        // use the "super" keyword
        super.speak("Meow")
    }
}

// create an instance of the cat class
const cat3 = new Cat ("Fluffy", "gray", false, false, true) ;

console.log(cat3);
cat3.speak();

// I needed to pass in the sound for an animal
cat2.speak("Meow");

// This Dog class can alsoe extend the Animal class
class Dog extends Animal {
    constructor(nameParam, furParam, isAwakeParam, isMovingParam, isPetParam) {
        // super is calling the parent constructor, so I need to pass in the correct parameters
        super(nameParam, "dog", 2, furParam, 4, isAwakeParam, isMovingParam);
        this.isPet = isPetParam;
    }
    // outside of the constructor but inside class definition
    // I can take an existing method and change it for this child class
    speak() {
        // refer to the existing parent method of speak()
        // use the "super" keyword
        super.speak("Woof")
    }
}

// Instantiate the Dog class
const dog2 = new Dog("Spot", "Black and White", true, true, true);
console.log(dog2);

// This Cow class can also extend the Animal class
class Cow extends Animal {
    constructor(nameParam, furParam, isAwakeParam, isMovingParam, isOnFarmParam) {
        // super is calling the parent constructor, so I need to pass in the correct parameters
        super(nameParam, "cow", 2, furParam, 4, isAwakeParam, isMovingParam);
        this.isOnFarm = isOnFarmParam;
        // this wasn't passed in anywhere, we will set it to true as a default
        this.hasBeenFed = true;
    }
    // outside of the constructor but inside class definition
    // I can take an existing method and change it for this child class
    speak() {
        // refer to the existing parent method of speak()
        // use the "super" keyword
        super.speak("Moo")
    }

    feed() {
        this.hasBeenFed = true;
    }

    needsToFeed () {
        this.hasBeenFed = false;
    }
}

// make a new cow by instantiating the class
//const cow2 = new Cow ('Elsie', 'brown', true, false, true);

console.log(cow2);
cow2.needsToFeed();
console.log(cow2);

console.log(Cow);

//// create a new cow, with whatever attributes you want
// console.log the cow's name
// have the cow sleep and wake up
// change the cow's name

// create a new cow
const cow3 = new ("Dora","black and white", true, false, true)
console.log(cow3)
//console.log the cow's name

