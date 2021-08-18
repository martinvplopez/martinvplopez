function convertToRoman(num) {
    let strRes= divideFigures(num);
    return strRes;
   }

function divideFigures(num){ //Function to analyze the number, know how many figures it has and compute the value
    let strRes="";
    let numS= num.toString();
    let numOfFigures= numS.length; 
    let nProx= 0;
    if(numOfFigures===1){
        if(num===5){
            strRes="V";
        }
        if(num<5){
            if(num!==4){
                for (let index = 0; index < num; index++) {
                    strRes += "I";
                }
            }else{
                nProx="V";
                strRes += "I" + nProx;
            }
        }
    }
    return strRes;
}
console.log(convertToRoman(4));
divideFigures(12);

   /* 
   -** Convert any number to roman **-
   We have to divide the numbers into figures:
   1:I 5:V 10:X 50:L 100:C 500:D 1000:M

   Ejemplo--> 36--> 30+6
   30: XXX VI 

- Hay que dividir el numero en cifras y analizar cuantas cifras tiene.
- Si el numero tiene 1 cifra y esta entre 1 y 5= I las veces que sean o IV, cifra===5: V y si cifra es mayor a 5 V y las I cuantas sean o IX.
-  


   */