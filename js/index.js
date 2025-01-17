// Prevent us from attempting to use variables
// that are not declared
"use strict"

/* for future reference */


// fun with mixed arrays
/*
let mixedTypeList = ["Kumquats", 42, "Pomegranites", false, 3.141718, -23];
console.log(mixedTypeList);

let willItPlay = mixedTypeList[3];
console.log(willItPlay);


console.log(mixedTypeList[2] + mixedTypeList[5]); // Adding a number to a string results in converting ALL to string 
console.log(mixedTypeList[1] + mixedTypeList[5]);
console.log(mixedTypeList[1] + mixedTypeList[3]); // Adding a bool to a var rejects the bool
console.log(mixedTypeList[3] + mixedTypeList[2]); // Adding a string to a bool results in a string 
console.log(mixedTypeList[5] * mixedTypeList[4]);
console.log(Math.round(mixedTypeList[5] * mixedTypeList[4]));
console.log(Math.round(mixedTypeList[5] * mixedTypeList[4] + 0.5)); //rounds down
console.log(Math.round((mixedTypeList[5] * mixedTypeList[4] + 0.5))); //still rounds down
let comeOnRoundUpAlready = (Math.round(mixedTypeList[4] + 0.5));
console.log(comeOnRoundUpAlready);                              // yay!
console.log(mixedTypeList[2] * mixedTypeList[4]);   // Grandma NaN, or Garlic NaN?
*/
/*
let shoppingList = ["Apricots", "Pineapple", "Raisins"];
console.log(shoppingList[0]);    // Output: "Apricots"

shoppingList.shift();            // Removing the first element with the shift method
console.log(shoppingList);       // Output: ["Pineapple", "Raisins"]

shoppingList.push("Cashews", "Cantelope");  // Add two new elements to the end
console.log(shoppingList);       // Output:   ['Pineapple', 'Raisins', 'Cashews', 'Cantelope']

shoppingList.unshift("Peaches"); // Add a new element to the beginning of the list
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Raisins', 'Cashews', 'Cantelope']

shoppingList.splice(2,0,"Apricots"); // Insert a new element between the 2nd & 3rd elements
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Apricots', 'Raisins', 'Cashews', 'Cantelope']

shoppingList.pop();              // Remove element from the end of the array
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Apricots', 'Raisins', 'Cashews']

shoppingList.splice(3,1);        // Go to the 4th element and remove it (cell count starts at zero)
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Apricots', 'Cashews']   

delete shoppingList[2];          // Erase the contents of Element 3 but do not remove it
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', …, 'Cashews']
                                 // Element 3 is rendered null or undefined


shoppingList.splice(2,0,"Apples");  //Insert new item after the 2nd element.  Delete no elements.
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Apples', …, 'Cashews']

shoppingList[3] = "Bananas";     // Make new assignment to Element 4
console.log(shoppingList);       // Output:  ['Peaches', 'Pineapple', 'Apples', 'Bananas', 'Cashews']

if (shoppingList[3]) {
    console.log(`Yes, we have some ${shoppingList[3]}!  We have some ${shoppingList[3]} today!`);
}                                // Output in the template literals format.
        // Output:  Yes, we have some Bananas !  We have some Bananas today!


console.log (shoppingList.length);  // Output:  5
 
 for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Yes, we have some ${shoppingList[i]}!  We have some ${shoppingList[i]} today!`);
};                             // same as above but running through the whole array
*/
