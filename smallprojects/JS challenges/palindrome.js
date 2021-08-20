//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Palindrome checker


// Main function which will get a String as input and will check if it´s a palindrome
function palindrome(str) {
    str=str.toLowerCase(); //To lower case
    let regex= /\W+|_+/g;  // Regex to check and erase all non alphanumerical chars
    str= str.replace(regex, "");
    return reverseStr(str);
  }
  
  function reverseStr(str){ // The function will go through the "clean" String reading it from the left and backwards.
    let iRight=str.length-1; // Right extreme
    let iLeft=0;
    while(iRight>=0 && iLeft<str.length){ 
      if(str[iRight]===str[iLeft]){ // if both reads are the same it´s palindrome.
        iLeft++;
        iRight--;
      }else{
        return false
      }
    }
    return true;
  }
  
  
  
  console.log(palindrome("e...._y....e"));  // eye is palindrome
  console.log(palindrome("not a palindrome")); // should be false
  console.log( palindrome("never odd or even")); // should be true

