let mySaves={ //Object representing a save with it´s name, URL value and the id of the btton to delete it.
    name: [],
    urlink:[],
    btnID:[]
};

let btnIdDel=0; //ID of the button

//Basic functionality
const inputBtn=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el");
const ulEl= document.getElementById("ul-el");
const deleteAllBtn= document.getElementById("deleteall-btn");
const saveTabBtn= document.getElementById("savetab-btn");


//Modal objects
const modal= document.getElementById("modal");
const closeBtn= document.getElementsByClassName("close-btn")[0];
const okSaveName= document.getElementById("saveURL-name-btn");
const inputNameURL= document.getElementById("input-name-url");
const warningSave= document.getElementById("warning-save-name");


const savesLocalStorage= JSON.parse(localStorage.getItem("mySaves"));
if(savesLocalStorage){
    mySaves= savesLocalStorage;
    render(mySaves);
}

okSaveName.addEventListener("click", saveName);

function saveName(){ //Function to save the name of the URL
    if(inputNameURL.value.trim().length!==0){
        mySaves.name.push(inputNameURL.value);
        modal.style.display="none";
        inputNameURL.value="";
        localStorage.setItem("mySaves", JSON.stringify(mySaves));
        render(mySaves);
    }
}


closeBtn.addEventListener("click", closeModal);


function closeModal(){ //Function to close the modal via the window or the X button
    console.log(mySaves);
    modal.style.display="none";
    mySaves.urlink.pop(); //There won´t be any saved URL and button without a name
    mySaves.btnID.pop(); 
    btnIdDel--; //The id will be decremented by one if it hasn´t been used
    console.log(mySaves);
}

window.addEventListener("click", (e)=>{
    if(e.target==modal){ //A click in the modal area will close it
        closeModal();
    }
    //Checking which deleteURLButton is being clicked
    for (let index = 0; index<mySaves.btnID.length; index++){ 
        let strButDel= `buttonDel${index}`;
        let butDel= document.getElementById(strButDel);
        if(e.target==butDel){
            console.log("Index of button pressed is: " + index);
            delSingle(index);
            //console.log("lo del boton de delete funciona");
        } 
    }
});

function delSingle(index){ // Function to delete an element in given the index of the id the user clicks
    if(index===0){ //If it is the first element of the array just shift it
        mySaves.name.shift()
        mySaves.urlink.shift()
        mySaves.btnID.shift()
    }
    else if(index===(mySaves.name.length)-1){ // If it is the last one a pop is enough
        mySaves.name.pop()
        mySaves.urlink.pop()
        mySaves.btnID.pop()
    }else{
        for(let i=0; i<mySaves.name.length;i++){
            if(index===i){
                for(let j=i;j<mySaves.name.length;j++){
                    if(j===mySaves.name.length-1){
                        //If it gets to the last element just pop it
                        mySaves.name.pop()
                        mySaves.urlink.pop()
                        mySaves.btnID.pop()
                    }else{ //The element being deleted will point to the next position
                        mySaves.name[j]=mySaves.name[j+1]; 
                        mySaves.urlink[j]=mySaves.urlink[j+1]; 
                        mySaves.btnID[j]=mySaves.btnID[j+1]-1; 
                    }
                }
            }
        }
    }
    let pos=0;
    while(pos<mySaves.name.length){
        mySaves.btnID[pos]=pos;
        pos++;
    }
    btnIdDel=mySaves.name.length;
    localStorage.clear();
    localStorage.setItem("mySaves", JSON.stringify(mySaves));
    console.log(mySaves);
    render(mySaves);
}


saveTabBtn.addEventListener("click", ()=>{ //Function to save the current tab (only while extension)
    console.log("You are trying to save a tab");
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        mySaves.urlink.push(tabs[0].url);
        console.log(mySaves);
        mySaves.btnID.push(btnIdDel);
        btnIdDel++;
        modal.style.display="block";
    });
});


deleteAllBtn.addEventListener("dblclick", ()=>{ //Funtion to delete all of the saves, Local Storage included
    localStorage.clear();
    mySaves={
        name: [],
        urlink:[],
        btnID:[]
    };
    render(mySaves);
});

document.addEventListener("keypress", (e)=>{ //If the enter is pressed the name will be saved
    if(e.key==="Enter" ){
        saveName();
    }
})

inputBtn.addEventListener("click", ()=>{ //Function to add an URL trought the input text
    console.log("Button clicked (from eventlistener)");
    if (inputEl.value.trim().length!==0) {  //Trimmed value of the input can´t be 0
        console.log(inputEl.value);
        mySaves.urlink.push(inputEl.value);
        console.log(mySaves);
        inputEl.value="";
        mySaves.btnID.push(btnIdDel);
        btnIdDel++;
        //console.log(localStorage.getItem("mySaves"));
        modal.style.display="block";
    }
});

function render(saves){ //Function to render the saves
    let listItems="";
    console.log(saves);
    for(let i=0; i<saves.urlink.length;i++){
        listItems+= `
        <li>
        <p style="display:inline-block;"> Name of the URL: ${saves.name[i]}--> <a href="${saves.urlink[i]}" target="_blank"> ${saves.urlink[i]}  </a></p> <button id="buttonDel${saves.btnID[i]}">DELETE</button>
        </li>` 
        console.log(listItems);
    }
    ulEl.innerHTML=listItems;   
}






