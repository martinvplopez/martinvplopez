function palindrome(str) {
    str=str.toLowerCase(); //To lower case
    let regex= /\W+|_+/g;  // Regex to check and erase all non alphanumerical chars
    str= str.replace(regex, "");
    let isPal = reverseStr(str);
    return isPal;
  }
  
  function reverseStr(str){ //Function to check wether the String is palindrome
    let iRight=str.length-1; //It will go through both extremes 
    let iLeft=0;
    while(iRight>=0 && iLeft<str.length){ 
      if(str[iRight]===str[iLeft]){ //If the read from left to right is the same as the one backwards it´s palindrome.
        iLeft++;
        iRight--;
      }else{
        return false
      }
    }
    return true;
  }
  
  
  
 console.log(palindrome("e...._y....e")); 
