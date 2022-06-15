console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = "name";
        this.pets = pets;
        this.residence = "residence";
        this.hobbies = hobbies;
        name(string)
    }
    addHobby() {
       this.hobbies.push(hobby);
    }
    
    removeHobby(hobby) {
        let foundIdx = this.hobbies.indexOf(hobby);
        let valuesBefore = this.hobbies.slice(0, foundIdx);
        let valuesAfter = this.hobbies.slice(foundIdx + 1);
        this.hobbies = valuesBefore.concat(valuesAfter);
    }
    
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }

    greeting() {
        console.log(`Hello! I am a coder! My name is ${this.name}.`);
    }
      
    toString(); {
        return Object 
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let coder = new("Sydni", 1, "Cary", ["Drawing", "Baking", "Listening to music"]);

coder.addHobby("Volleyball");

console.log(coder);

console.log(coder.toString());

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

result = 0;

add(a, b); {
    this.result = a + b;
    return this.result;
    }

subtract(a, b); {
this.result = a - b;
return this.result;
}

multiply(a, b); {
    this.result = a * b;
    return this.result;
    }

divide(a, b); {
    this.result = a / b;
    return this.result;
    }

let calc = new Calcultator();

calc.add(0, 1)
calc.display()
calc.subtract(5, 3)
calc.display()
calc.multiply(1, 3)
calc.display()
calc.divide(2, 1)
calc.display()
