//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Caesar Cipher (ROT13)


// Main function which has decode a string encoded by caesar cipher with 13 positions shifted.
function rot13(str){
    let strRes="";
    for (let index = 0; index < str.length; index++) {
        if (/\w/.test(str[index])) { // Checking if it is an alphabetic number.
            let strVal= str.charCodeAt(index) - 13; // Decoding is just making the opposit shift.
            if (strVal<65) { // The values have to be in the 65-90 range in ASCII code.
                strVal+=26;
            }
            strRes+= String.fromCharCode(strVal);
        }else{ // Values which aren´t 
            strRes+= str[index];
        }
    }
    return strRes;
}

// Functionality checks.
console.log(rot13("SERR YBIR?")); // Has to return FREE LOVE?
console.log(rot13("SERR CVMMN!")); // Has to return FREE PIZZA!
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
