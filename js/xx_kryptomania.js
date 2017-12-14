// Matthew P. Seltzer
// Dec. 12, 2017
// kryptomania.js
"use strict";

function toggleOptOut(){
    var chk = document.getElementById("isOptOut");
    var email = document.getElementById("emailAddress");
    var label = document.getElementById("emailAddressLabel");
    if (chk.checked === true) 
    {
      email.hidden = true;
      label.hidden = true;
    }
    else
    {
      email.hidden = false;
      label.hidden = false;
    }
}

/*
function hideVintage(){
    var vintage =  document.getElementById("superman_vintage"); 
    vintage.display = none; 
}

function showVintage(){
    var vintage =  document.getElementById("superman_vintage"); 
    vintage.display = block; 
}
*/

function createEventListeners(){
    var chk = document.getElementById("isOptOut");
    chk.addEventListener("click",toggleOptOut, false);
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}