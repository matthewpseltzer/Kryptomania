// Matthew P. Seltzer
// Dec. 12, 2017
// mailinglist.js
"use strict";
/////////////////////////////////////////////////////////////////////////////
// Regular expression validation notes:
//
// First name: all alpha characters, space, hyphen, apostrophe
//
// Last name: all alpha characters, space, hyphen, apostrophe
//
// First address line: all alphanumeric characters, space, hyphen, apostrophe
//
// Second address line: all alphanumeric characters, space, hyphen, apostrophe
//
// Apt./suite/etc.: all alphanumeric characters, space, dot (period)
//
// City: all alpha characters, space, hyphen
//
// U.S. State: self-validating (from dropdown)
//
// Zip code: numbers (but scientific notation not allowed)
/////////////////////////////////////////////////////////////////////////////

/*
var maxFirstNameLen = 15;
var maxLastNameLen = 35;
var maxAddressLine1Len = 20;
var maxAddressLine2Len = 20;
var maxAptSuiteEtcLen = 10;
var maxCityNameLen = 20;
var maxZipCodeLen = 10;
*/


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
/*
    var reset = document.getElementById("reset");
    reset.addEventListener("reset", hideVintage, false);

    var submit = document.getElementById("submit");
    reset.addEventListener("submit", showVintage, false);

    var firstName = document.getElementById("firstName");
    firstName.addEventListener("click",setMaxNumChars, false);  

    var lastName = document.getElementById("lastName");
    lastName.addEventListener("click",setMaxNumChars, false);

    var addressLine1 = document.getElementById("addressLine1");
    addressLine1.addEventListener("click",setMaxNumChars, false);

    var aptSuiteEtc = document.getElementById("aptSuiteEtc");
    aptSuiteEtc.addEventListener("click",setMaxNumChars, false);

    var cityName = document.getElementById("cityName");
    cityName.addEventListener("load",setMaxNumChars, false);

    var zipCode = document.getElementById("zipCode");
    zipCode.addEventListener("click",setMaxNumChars, false);
*/   
}


if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}