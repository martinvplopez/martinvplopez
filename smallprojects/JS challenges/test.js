//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Roman 

const romanFigures={ // Representation of numbers in roman.
    1:"I",
    5: "V",
    10:"X",
    50:"L",
    100:"C",
    500:"D",
    1000:"M"
}

// This main function will get a decimal number as an input and will return a string with its roman representation.
function romanConverter(num){
    const figures= getFigure(num);
    let romanRes="";
    for (let i = 0; i < figures.length; i++) {
        for (let j = 0; j < 7; j++) { // 7 is the length of the object
            let auxKey= Object.keys(romanFigures)[j];
            if (figures[i]>1000) { // The number is greater than 1000, then a "M" will be added
                auxKey= Object.keys(romanFigures)[6];
                while(figures[i]-auxKey>0){
                    figures[i]-= auxKey;
                    romanRes+= romanFigures[auxKey];
                }
            }
            if(figures[i]==auxKey){ // If the value is precisely like one in the roman representation.
                romanRes+= romanFigures[auxKey];
                break;
            }else if(figures[i]<auxKey){ // When the number is less than the representation
                if(figures[i]===auxKey-1){ // "I" can only substract "V" and "X"
                    if(auxKey==5||auxKey==10){ 
                        const auxKeyI=  Object.keys(romanFigures)[0]; 
                        romanRes+= romanFigures[auxKeyI] + romanFigures[auxKey]; 
                        break;
                    }
                }
                if(figures[i]==(auxKey-10) && figures[i]>10){ // Only "X" can substract "L" y "C".
                    if (auxKey==50 || auxKey==100) { 
                        const auxKeyX=  Object.keys(romanFigures)[2]; 
                        romanRes+= romanFigures[auxKeyX] + romanFigures[auxKey]; 
                        break;
                    }

                }
                if(figures[i]==(auxKey-100) && figures[i]>100){ // Only "C" is able to substract "D" and "M".
                    if (auxKey==500 || auxKey==1000) { 
                        const auxKeyC=  Object.keys(romanFigures)[4]; 
                        romanRes+= romanFigures[auxKeyC] + romanFigures[auxKey]; 
                        break;
                    }
                }

                let pos=j-1;
                auxKey=  Object.keys(romanFigures)[pos]; 
                while(figures[i]-auxKey>=0){ // While the number is being substracted by a less value roman representation it will be in the result
                    figures[i]-= auxKey;
                    romanRes+=romanFigures[auxKey];
                    if(pos!=0 && figures[i]-auxKey<0){ // Only get a lower value from the roman object if it is possible (not 0) and needed (the substraction returns a negative number)
                        pos--;
                        auxKey= Object.keys(romanFigures)[pos]; 
                    }
                }
            }
        }        
    }
    console.log(romanRes);
    return romanRes;
}



// Function to get the integer figures of a number
// e.g: 286 is 200 + 80 + 6 || 4234 is 4000 + 200 + 30 + 4
function getFigure(num) {
    let figures=[];
    const numS= num.toString();
    if(numS.length===1){ // Trivial case, only one figure
        figures.push(num);
    }else{
        let g=0;
        while(g<numS.length){
            let figure=numS[g];
            if(figure==="0"){ // If the digit is a 0 just continue through the number
                g++;
                figure=numS[g];
            }else{ // Add as many 0´s as digits are left in the number
                for(let i=g;i<numS.length-1;i++){ 
                    figure += "0";
                }
                figures.push(parseInt(figure));
                g++;
            }
        }
    }
    console.log(figures);
    return figures;
}

// Some tests of the functionality to check if it works :)


if ("XLIV"===romanConverter(44)) {
    console.log(true);
}
if ("MMXIV"===romanConverter(2014)) {
    console.log(true);
}
if ("MMMCMXCIX"===romanConverter(3999)) {
    console.log(true);
}
if ("M"===romanConverter(1000)) {
    console.log(true);
}

