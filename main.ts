
/*@edabit :Area of a Triangle 
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50*/
// Solution 

class Triangle {
    //Delcare properties
    height: number;
    base: number;

    //Constructor
    constructor(height: number, base: number) { // height and base are two variables in the class which are both numbers
        this.height = height;
        this.base = base;
    }

    //Methods
    get area() {
        return this.calcArea(); //a getter method
    }
    calcArea() {
        return ((this.height * this.base) / 2); //a method to calculate the area of a tritangle
    }
}

let myTriangle = new Triangle(7, 4);
console.log(myTriangle.area);



/*@edabit :Concatenating Two Integer Arrays (easy 01)
Create a function to concatenate two integer arrays.

Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
*/

//Solution

var arr1: number[] = [1, 3, 5];
var arr2: number[] = [2, 6, 8];
var myArray = [...arr1, ...arr2];
console.log(myArray); // Expected Result [1,3,5,2,6,8]




/** @edadbit: Capitalize the Names (Medium)
Create a function that takes an array of names and returns an array with only the first letter capitalized.

Examples
capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

capMe(["samuel", "MABELLE", "letitia", "meridiTH"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"] */

//Solution 


var namesArray: string[] = ["mavis", "MABELLE", "meridiTH"];

 for (var i=0 ; i < namesArray.length; i++ ) {
if (typeof namesArray[i]=== 'string') {
     namesArray[i]= namesArray[i][0].toUpperCase()+namesArray[i].slice(1).toLowerCase();
}
    }
        
console.log(namesArray);