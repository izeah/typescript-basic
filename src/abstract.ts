abstract class Animal {
    makeSound(): void {
        console.log("something");
    }
}

class Dog extends Animal {
    // override function
    makeSound(): void {
        console.log("woooggggg");
    }
}

class Cat extends Animal {
    // override function
    makeSound(): void {
        console.log("Meowwwww");
    }
}

let animals: Animal[] = [new Dog(), new Cat()];

// implementing polymorphism
// program doesn't recognize concrete type on an object
// program can trace down the subclass of the object whose method is being executed and run the appropriate behavior
// Polymorphism is the ability of a program to detect the real
// class of an object and call its implementation even when its
// real type is unknown in the current context.
for (const a of animals) {
    a.makeSound();
}
