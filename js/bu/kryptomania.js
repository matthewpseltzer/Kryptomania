// Matthew P. Seltzer
// Dec. 12, 2017
// kryptomania.js
"use strict";
var currentQuestion = -1;
var correctAnswers = [1,
                      2,
                      0];
var responses = [];
var currentResponse;

var startBtn = document.getElementById("startBtn");
var quizQuestions = ["The mother of Superman's son is ",
                     "During his Superboy career in Smallville, Superman's secret identity was known by ",
                     "Supergirl's adoptive parents were "];
var choices =       [["Lori Lemaris","Lois Lane","Lana Lang","Luma Lynai"],
                     ["Lana Lang","Lex Luthor","Pete Ross","Bruce Wayne"],
                     ["Zor-El and Alura", "Jor-El and Lara", "Van-Zee and Sylvia", "Fred and Edna Danvers"]
                    ];
// syntax to retrieve values from choices two-dimensional array is choices[i][j], 
// where, in this case, (i >= 0 and <= quizQuestions.length - 1) and (j >=0 and j < 4)

//initializes responses array to blanks
for (var i= 0; i < quizQuestions.length - 1; i++){
    responses.push("");   
}

function start(){
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    currentQuestion += 1;
    console.log("After start is pressed: " + currentQuestion);
    refreshContent(); 
}


function isChecked(){
    var isChecked; // Boolean value
    radios = documents.getElementsByClassName("choice");
    for(var i = 0; i < radios.length - 1; i++){
        if (radio[i].checked) {
           isChecked = true;
           updateResponse(i);
           return true;
        }        
    }
    if (!isChecked){
        window.alert("Please make a choice before continuing.");
        return false;
    }
}

function moveNext(){
    // Checks to see if this is the last question.
    console.log(currentQuestion);
    if (isEndOfQuiz) {
        console.log(currentQuestion);
        moveNext = document.getElementById("moveNext");
        moveNext.style.visible = false;
    }
    else if (!isEndOfQuiz)
    {
      isChecked();
      updateResponse(currentQuestion);
      console.log(currentQuestion);
      currentQuestion += 1;
      console.log(currentQuestion);
      refreshContent();
    }
    // If so, remove event listener from the Superman image;
    // If this is not the last question, check to see that one and only one radio button has been selected;
    // Update the responses[] array.
    // Increment the currentQuestion variable.
    // Refresh the question text and the text of the labels that hold the choice descriptions.

}

// updates radio button label content and text of quiz question
function refreshContent(){
    var labels = document.getElementsByClassName("choiceContent");
    console.log(labels.length);
    for (var j = 0; j <= labels.length - 1; j++){
        labels[j].innerHTML = choices[currentQuestion][j];
        console.log(choices[currentQuestion][j])
    }
    document.getElementById("questionNumberAndText").innerHTML = (currentQuestion + 1) + ". " + quizQuestions[currentQuestion];    
}

function updateResponse(i){
  responses[currentQuestion] = currentQuestion; // wrong!
}

function isEndOfQuiz(){
    if((currentQuestion + 1) === responses.length){
        return true;
    }
    else
    {
        return false;
    }
}

function createEventListeners(){
    var startBtn = document.getElementById("startBtn");
    var next  = document.getElementById("next");
    if (startBtn.addEventListener) {
       startBtn.addEventListener("click", start, false);
    }
    if (next.addEventListener){
        next.addEventListener("click", moveNext, false);
    }
}

window.addEventListener("load", createEventListeners, false);








