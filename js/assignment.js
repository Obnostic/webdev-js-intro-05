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

console.log(`Answer1: ${answerOneEl}`);

function updateAnswerOne() {
    answerOneEl.innerHTML(todos);   
}

function updateAnswerTwo() {
    answerTwoEl.innerText(todos[2]); 
}

function removeLastValue() {
    let popvalue = todos.pop();
}

function removeFirstValue() {
    let shiftValue = todos.shift();    
}

function addShiftAndPopValues() {
    todos.push(popValue, shiftValue);
}

function updateAnswerFour() {
    console.log(todos);
}

function reverseTodoList() {
    todos.reverse();

}

function updateAnswerFive() {
    console.log(todos);
}

function updateAnswerSix() {
    console.log(todos);
}

function render() {
    console.log(todos);
}

submissionBtn.addEventListener("click", function () {
   /* console.log('Window'); */
   console.log("answer-one"); 
     render();    
});  

/*

orig was:

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});  




window.addEventListener("click", function() {
	console.log('Window');
    } , true);

document.addEventListener("click", function() {
	console.log('Document');
    } , true);

document.querySelector('submission-btn').addEventListener
	("click", function(e) {
		console.log(e.target.innerText = 'Submitted!');
    } , true);
*/
