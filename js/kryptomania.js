// Matthew P. Seltzer
// Dec. 12, 2017
// kryptomania.js
"use strict";
var currentQuestion = 0;
var correctAnswers = [1,
                      2,
                      0];
var responses = ["","",""];

//var startBtn = document.getElementById("startBtn");
var quizQuestions = ["The mother of Superman's son is ",
                     "During his Superboy career in Smallville, Superman's secret identity was known by ",
                     "Supergirl's adoptive parents were "];
var choices =       [["Lori Lemaris","Lois Lane","Lana Lang","Luma Lynai"],
                     ["Lana Lang","Lex Luthor","Pete Ross","Bruce Wayne"],
                     ["Zor-El and Alura", "Jor-El and Lara", "Van-Zee and Sylvia", "Fred and Edna Danvers"]
                    ];
// syntax to retrieve values from choices two-dimensional array is choices[i][j], 
// where, in this case, (i >= 0 and <= quizQuestions.length - 1) and (j >=0 and j < 4)



function setUpQuiz(){
    var quiz = document.getElementById("quiz");
    quiz.style.display = "block";
    /*
    for (var i= 0; i < quizQuestions.length - 1; i++){
    responses.push(-1);
    */
    refreshContent(); 
}


function isChecked(){
    var isChecked; // Boolean value
    var radios = document.getElementsByClassName("choices");
    for(var i = 0; i < radios.length - 1; i++){
        if (radios[i].checked) {
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
    if (isEndOfQuiz && (!isChecked())) {
       window.alert("This is the last question.  Please make a selection.");
    }
    else if (isEndOfQuiz && (isChecked()))
    {
        window.alert("Congratulations!  You've made it to the end!");
    }
    else if (!isEndOfQuiz)
    {  
      isChecked();
      currentQuestion += 1;
      refreshContent();
    }
    
}

// updates radio button label content and text of quiz question
function refreshContent(){
    var labels = document.getElementsByClassName("description");
    for (var j = 0; j <= labels.length - 1; j++){
        labels[j].innerHTML = choices[currentQuestion][j];
        console.log(choices[currentQuestion][j])
    }
    document.getElementById("questionNumberAndText").innerHTML = (currentQuestion + 1) + ". " + quizQuestions[currentQuestion];    
}

function updateResponse(i){
  responses[currentQuestion] = i;
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
    var supermanBtn  = document.getElementById("supermanBtn");
    if (supermanBtn.addEventListener){
        supermanBtn.addEventListener("click",moveNext, false);
    }
    if (window.addEventListener){
        window.addEventListener("load", setUpQuiz,false);
    }    
}

window.addEventListener("load", createEventListeners, false);








