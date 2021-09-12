//      Martín van Puffelen López 
//      2021
//      Challenge done for FreeCodeCamp´s DS and Algorithms: Cash Register

const CURRENCYDICTIONARY={ // Dictionary which represents the currency units in integers so it is easier to compute with them.
  "PENNY":1,
  "NICKEL":5,
  "DIME":10,
  "QUARTER":25,
  "ONE":100,
  "FIVE":500,
  "TEN":1000,
  "TWENTY":2000,
  "ONE HUNDRED":10000
}

const STATUS={
  open:"OPEN",
  closed:"CLOSED",
  insufficient: "INSUFFICIENT_FUNDS"
}


function checkCashRegister(price, cash, cid) {
  let cashRegister={status:"", change:[]}; // Result variable
  let change= (cash*100-price*100); // Computing the change
  let sumCid=getTotalCid(cid); // Getting the total in cash-in-drawer
  cashRegister=getStatusCid(cashRegister,change,sumCid); 
  if (cashRegister.status===STATUS.insufficient) { // Returning the insufficient funds object.
    return cashRegister;
  }
  if (cashRegister.status===STATUS.closed) { // Returning the insufficient funds object.
    cashRegister.change=cid;
    return cashRegister;
  }
  cashRegister.change= getChangeToGive(change,cid);

  if(getTotalCid(cashRegister.change)!==change){
    cashRegister.status=STATUS.insufficient;
    cashRegister.change=[];
  }
  return cashRegister;
  
}

function getStatusCid(cashRegister,change,sumCid){
  if(sumCid<change){ // Total money in cash-in-drawer is not enough
    cashRegister.status=STATUS.insufficient;
  }
  else if(sumCid===change){ // If the change is exactly the same it will be closed and everything will be returned
    cashRegister.status= STATUS.closed;
    
  }
  else{
    cashRegister.status= STATUS.open;
  }
  return cashRegister;
}
function getTotalCid(cid) {
  let sumCid=0;
  for(let i=0;i<cid.length;i++){
    sumCid+=cid[i][1]
  }
  sumCid *= 100;
  return sumCid;
}

function getChangeToGive(change,cid){
  let changeRes=[];
  for (let i = cid.length-1; i>=0; i--) { // Reading the contents of the cash-in-drawer from highest to lowest.
    const coin = cid[i][0]; // The name of the coin/bill
    const coinTotal = cid[i][1]*100; // Total value
    const coinVal= CURRENCYDICTIONARY[coin]; // The value of a unit 
    let coinAmount= coinTotal/coinVal; // The number of units
    let coinsReturned=0;

    while(coinVal<=change && coinAmount>0){ // If the value of the actual coing is less than the change needed and there is in the cash-in-drawer
      coinsReturned++;
      change-=coinVal;
      coinAmount--;
    }

    if(coinsReturned>0){
      changeRes.push([coin, (coinVal*coinsReturned)/100]);
    }
    
  }
  return changeRes;
}
  
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])