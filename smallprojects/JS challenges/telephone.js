//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Telephone Number Validator

// The funtion gets a string as input and has to determine whether it´s a valid US telephone number or not.
function telephoneCheck(str) {
    if (str.length>16 || str.length<10) {
        return false;
    }
    let regex= /\d |\s |\( |\)/; // It will search for digits, spaces and parenthesis.
    if (regex.test(str)) {
        console.log("Lleva digito, espacio o parentesis");
        return false;
    }
    
    
    
    //return true;

}

telephoneCheck("999-(");