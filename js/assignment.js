"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;


// Declaring constant variables to store references to the elements
// that will be updated by your code.
/*const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six"); */
const submissionBtn = document.getElementById("submission-btn"); 


/* function updateAnswerOne() {
     console.log(todos);
} */

/* function updateAnswerTwo() {
    console.log(todos[2]);     
} */

function removeLastValue() {
    popValue = todos.pop();
}

function reverseTodoList() {
    todos.reverse();
}

function removeFirstValue() {
    shiftValue = todos.shift();
} 


/* function updateAnswerFour() {
  console.log(todos); 
} */


/*function updateAnswerFive() {  
  console.log(todos);
}*/

function addShiftAndPopValues() {
   todos.push(shiftValue,popValue);
}


/*function updateAnswerSix() {
    console.log(todos); 
} */

/*function render() {        
     updateAnswerOne ();
     updateAnswerTwo (); 
     removeLastValue();
     updateAnswerFour();
     reverseTodoList();
     updateAnswerSix();
     removeFirstValue();
     addShiftAndPopValues();
     updateAnswerSix();
} */

submissionBtn.addEventListener("click", function () {
    document.getElementById("answer-one").innerHTML=todos;  
    document.getElementById("answer-two").innerHTML=todos[2];
    removeLastValue(); 
    document.getElementById("answer-four").innerHTML=todos;
    reverseTodoList();
    document.getElementById("answer-five").innerHTML=todos;
    removeFirstValue()
    addShiftAndPopValues();
    document.getElementById("answer-six").innerHTML=todos;
    /*render(); */
 
});
