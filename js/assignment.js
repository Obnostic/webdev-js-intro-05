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
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");


function updateAnswerOne() {
     console.log(todos);   
}

function updateAnswerTwo() {
    console.log(todos[2]); 
}

function removeLastValue() {
    let popvalue = todos.pop();
}

function reverseTodoList() {
    todos.reverse();
}

function removeFirstValue() {
    let shiftValue = todos.shift();   
}

function updateAnswerFour() {
  console.log(todos); 
}

function reverseTodoList() {
    todos.reverse();

}

/*function updateAnswerFive() {
  console.log(todos);
}*/
function addShiftAndPopValues() {
    todos.push(shiftValue,popValue);
}


function updateAnswerSix() {
    console.log(todos); 
}

 /* function render() {         UNUSED
  updateAnswerTwo(); 
}*/

submissionBtn.addEventListener("click", function () {
     updateAnswerOne ();
     updateAnswerTwo ();
     removeLastValue();
     updateAnswerFour();
     reverseTodoList();
     updateAnswerSix();
     removeFirstValue();
     addShiftAndPopValues();
     updateAnswerSix();
     /* render();    */ 
});  

