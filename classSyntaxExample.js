//class based syntax in JavaScript allows for pseudo object oriented style of writing javascript
//JavaScript does NOT have classes and this is syntactic sugar for the underlying function that makes up a class

//Example
class Rectangle {
    //the constructor is special method for creating and initializing an objected created with a class
    constructor(height, width){
        this.name = "Rectangle";
        this.height = height;
        this.width = width; 
    }

    get area() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        //call the parent class (Rectangle) with super with lengths
        //provided for the Rectangle's width and height
        //You can think about it like calling the parent class's constructor 
        super(length, length);
        this.name = "Square"
    }
}

let newSquare = new Square(4);

//have access to getter area() through parent Rectangle class
console.log(newSquare.area); // => 16
//unique name
console.log(newSquare.name); // => "Square"
//length is undefined and only exists in the scope of Square 
//We are simply assigning that argument (length) to Rectangle's height and width
console.log(newSquare.length); // => undefined
console.log(newSquare.width); // => 4
console.log(newSquare.height); // => 4

