// Grabbed main content wrapper from html to reference
var mainContentEl = document.querySelector("#main-content");

// Questions array containing the quiz questions and answers
var questions = [
    {   question: "Arrays in JavaScript can be used to store _________.", 
        choices: [
            {option: 1, choice: "numbers and strings"},
            {option: 2, choice: "other arrays"},
            {option: 3, choice: "booleans"},
            {option: 4, choice: "all of the above"}
        ],
        answer: 4
    },
    {   question: "Commonly used data types DO Not Include:", 
        choices: [
            {option: 1, choice: "strings"},
            {option: 2, choice: "booleans"},
            {option: 3, choice: "alerts"},
            {option: 4, choice: "numbers"}
        ],
        answer: 3
    },
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: [
            {option: 1, choice: "JavaScript"},
            {option: 2, choice: "console.log"},
            {option: 3, choice: "for loops"},
            {option: 4, choice: "terminal/bash"}
        ],
        answer: 2
    },
    {   question: "String values must be enclosed within _______ when being assigned to variables.", 
        choices: [
            {option: 1, choice: "commas"},
            {option: 2, choice: "curly brackets"},
            {option: 3, choice: "quotes"},
            {option: 4, choice: "parenthesis"}
        ],
        answer: 3
    }, 
    {   question: "The condition in an if / else statement is enclosed with __________.", 
        choices: [
            {option: 1, choice: "quotes"},
            {option: 2, choice: "curly brackets"},
            {option: 3, choice: "parenthesis"},
            {option: 4, choice: "square brackets"}
        ],
        answer: 3
    }
];