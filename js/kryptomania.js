// Matthew P. Seltzer
// Dec. 12, 2017
// kryptomania.js
"use strict";
function setUpQuiz(){    
    var correctAnswers = [1,2,0];
    var responses = [];
    var newField;
    var quizForm = document.getElementById("quizForm");
    var quizQuestions = ["The mother of Superman's son is ",
                          "During his Superboy career in Smallville, Superman's secret identity was known by ",
                          "Supergirl's adoptive parents were "];
    var choices =[["Lori Lemaris","Lois Lane","Lana Lang","Luma Lynai"],
                  ["Lana Lang","Lex Luthor","Pete Ross","Bruce Wayne"],
                  ["Zor-El and Alura", "Jor-El and Lara", "Van-Zee and Sylvia", "Fred and Edna Danvers"]
                 ];                      
    for (i= 0; i < quizQuestions.length - 1; i++){
        responses.push("");
        newField = document.createElement("input");
        newField.type = "hidden";
        newField.name = "q" + i.toString;
        newField.value = quizQuestions[i];
        quizForm.appendChild(newField);
        newField = "";

        newField = document.createElement("input");
        newField.type = "hidden";
        newField.id = "a" + i.toString;
        newField.value = correctAnswers[i];
        quizForm.appendChild(newField);
        newField = "";
       
        // create hidden fields to contain user responses
        newField = document.createElement("input");
        newField.type = "hidden";
        newField.id = "r" + i.toString;
        newField.value = "";
        quizForm.appendChild(newField);
        newField = "";
        // create hidden fields to contain radio button label text for choices
        for (j= 0; j < 4; j++){
            newField = document.createElement("input");
            newField.type = "hidden";
            newField.id = "c" + i.toString + "_" + j.toString;
            newField.value = choices[i,j];
            quizForm.appendChild(newField);
            newField = "";
        }
   
    }
    newField = document.createElement("input");
    newField.type = "hidden";
    newField.id = "currentQuestion";
    newField.value = 0;
    quizForm.appendChild(newField);
    newField = "";
 
    newField = document.createElement("input");
    newField.type = "hidden";
    newField.id = "numberCorrect";
    newField.value = 0;
    quizForm.appendChild(newField);
    newField = "";
}

function nextQuestionNumber(){
    if(getElementById("currentQuestion").value < quizQuestions.length){
        getElementById("currentQuestion").value += 1;  
    }
}

function previousQuestionNumber(){
    if(getElementById("currentQuestion").value > 0){
        getElementById("currentQuestion").value -= 1;  
    }
}

function setFinalScore(){
  for (i = 0; i < quizQuestions.length; i++){
      if (correctAnswers[i] === document.getElementById("r" + i.toString).value){
          document.getElementById("numberCorrect").value +=1;
      }
  }
}

function createEventListeners(){

    if (window.addEventListener){
        window.addEventListener("load",setupQuiz, false);
    }
    else if (window.attachEvent)
    {
        window.attachEvent("onload, setupQuiz");
    }    
    
}

function addEventListener(){
    createEventListeners();
}



// create a function to determine which radio button was clicked (response value)

// create a function to populate the labels containing the radio button descriptive text




