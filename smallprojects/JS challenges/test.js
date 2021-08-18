const romanFigures={ // Representation of numbers in roman.
    1:"I",
    5: "V",
    10:"X",
    50:"L",
    100:"C",
    500:"D",
    1000:"M"
}

//console.log(romanFigures[1]);

function romanConversor(num){
    const figures= getCipher(num);
    let romanRes="";
    for (let i = 0; i < figures.length; i++) {
        for (let j = 0; j < 7; j++) { // 7 is the length of the object
            let auxKey= Object.keys(romanFigures)[j] 
            if(figures[i]==auxKey){
                romanRes+= romanFigures[auxKey];
                break;
            }else if(figures[i]<auxKey){
                //console.log(romanRes);
                if(figures[i]===auxKey-1){ //9==10-1
                    console.log("Entra en el -1");
                    let pos;
                    if(pos-2>0){
                        pos=j-2;
                    }else{
                        pos=j-1;
                    }
                    let auxKeyPrev=  Object.keys(romanFigures)[pos]; 
                    romanRes+= romanFigures[auxKeyPrev] + romanFigures[auxKey]; 
                    break;
                }
                if(figures[i]===(auxKey-10)){
                    console.log(figures[0]);
                    console.log(auxKey);
                    console.log("Entra en el -10");
                    let auxKeyX=  Object.keys(romanFigures)[2]; 
                    romanRes+= romanFigures[auxKeyX] + romanFigures[auxKey]; 
                    break;
                }
                let auxKeyPrev=  Object.keys(romanFigures)[j-1]; 
                if(figures[i]===auxKey-auxKeyPrev){
                    console.log("Entra en el -ant");
                    romanRes += romanFigures[auxKeyPrev] + romanFigures[auxKey];
                    break;
                }
                let pos=j-1;
                auxKey=  Object.keys(romanFigures)[pos]; 
                while(figures[i]-auxKey>=0){
                    figures[i]-= auxKey;
                    romanRes+=romanFigures[auxKey];
                    if(pos!=0 && figures[i]-auxKey<0){
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

romanConversor(3);




//Function to get the integer ciphers of a number
//e.g: 286 is 200 + 80 + 6
function getCipher(num) {
    let figures=[];
    const numS= num.toString();
    if(numS.length===1){
        figures.push(num);
    }else{
        let g=0;
        while(g<numS.length){
            let figure=numS[g];
            if(figure==="0"){
                g++;
                figure=numS[g];
            }else{
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
