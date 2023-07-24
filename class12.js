// Instance Methods: These methods are defined within the class and are
//  available on instances of the class. They have access to 
//  instance-specific data using the this keyword.

 

class Class1 {
    constructor(value) {
        this.value = value;
    }

  // Instance method
    showvalue() {
        console.log(this.value);
    }
}

 const instance = new Class1(42);
instance.showvalue();


// Static Methods: Static methods are defined using the static keyword 
// within the class. They belong to the class itself and are not 
// accessible on instances. Static methods are useful for utility functions that don't rely on instance-specific data.

class Mathematics {
    static sub(p, q) {
        return p - q;
    }
}
const minus = Mathematics.sub(10, 3);
console.log(minus);

// Getter Methods: Getter methods are used to access the properties of an 
// object as if they were regular properties. They are defined using the 
// get keyword.

 class Square {
    constructor(side) {
        this.side = side;
    }

 

    // Getter method
    get area() {
        return this.side **2;
    }
}
const square = new Square(5);
console.log(square.area);
// Setter Methods: Setter methods are used to modify the properties of an
//  object as if they were regular properties. They are defined using the
//   set keyword.
 class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get cel(){
        return this.celsius;
    }

    // Setter method
    set fahrenheit(value) {
        this.celsius = (value - 32) * (5 / 9);
    }
}

 const temp = new Temperature(25);
console.log(temp.cel);
temp.fahrenheit = 68; // Calling the setter
console.log(temp.celsius);

