//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Caesar Cipher (ROT13)


// Main function which has decode a string encoded by caesar cipher with 13 positions shifted.
function rot13(str){
    let strRes="";
    for (let index = 0; index < str.length; index++) {
        if (/\w/.test(str[index])) { // Checking if it is an alphabetic number
            let strVal= str.charCodeAt(index) - 13;
            strRes+= String.fromCharCode(strVal);
        }
    }
    return strRes;
}

// Algorithm: go through the string checking every char and if it is an alphabetic character substract it 13.

console.log(rot13("N"));