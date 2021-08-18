let mySaves={
    name: ["jajaja", "aggg"],
    url:["risa.com", "enfado.com"]
};

localStorage.removeItem


function deleteFromLocalStorage(){

}


/*/Program to delete an element of an array given an index i
function deleteElement(vec, index){
    if(index===0){ //If it is the first element of the array just shift it
        vec.shift()
    }
    else if(index===(vec.length)-1){ // If it is the last one a pop is enough
        vec.pop();
    }else{
        for(let i=0; i<vec.length;i++){
            if(index===i){
                for(let j=i;j<vec.length;j++){
                    if(j===vec.length-1){
                        vec.pop(); //If it gets to the last element just pop it
                    }else{
                        vec[j]=vec[j+1]; //The element being deleted will point to the next position
                    }
                }
            }
        }
    }
    return vec;
}


let mySaves = [1,1,3, 6, 7, 8] 
mySaves= deleteElement(mySaves, 2)
console.log(mySaves);

// vec after deleteElement()=> [1,2]*/

