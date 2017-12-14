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

function toggleOptOut(){
    var chk = document.getElementById("isOptOut");
    var email = document.getElementById("emailAddress");
    var emailAddress = document.getElementById("emailAddressLabel");
    if (chk.checked) 
    {
      email.style.visibility = "hidden";
      emailAddress.style.visibility = "hidden";
    }
    else
    {
      email.style.visibility = "visible";
      emailAddress.style.visibility = "visible";  
    }
}

function createEventListeners (){
    var chk =  document.getElementById("isOptOut");
    if (chk.addEventListener) {
        chk.addEventListener("click",toggleOptOut, false);
    }
}