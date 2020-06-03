const addButton = document.querySelector(".add");
const updateButton = document.querySelector(".updateSettings");

const billItem = document.querySelector(".billItemTypeWithSettings");
const smsCost = document.querySelector(".smsCostSetting");
const callCost = document.querySelector(".callCostSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");
const warningLevel = document.querySelector(".warningLevelSetting");

const callCostElem = document.querySelector(".callTotalSettings");
const smsCostSetting = document.querySelector(".smsTotalSettings");

const totalCostElemThree = document.querySelector(".totalSettings");

var smsCostVal = 0;
var callCostVal = 0;
var warnLevel = 0;
var critLevel = 0;

var smsCostTotal = 0;
var callCostTotal = 0;
var allCostTotal = 0;

  function ButtonClicked(){
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if(allCostTotal < critLevel){
  
    if (checkedRadioBtn){
  var itemChecked = checkedRadioBtn.value;
  
    if(itemChecked === "call"){
      callCostTotal += callCostVal;
    }
    else if (itemChecked === "sms"){
      smsCostTotal += smsCostVal;
      
    }
    }
    callCostElem.innerHTML = callCostTotal.toFixed(2);
  smsCostSetting.innerHTML = smsCostTotal.toFixed(2);
      allCostTotal = callCostTotal + smsCostTotal
  totalCostElemThree.innerHTML = allCostTotal.toFixed(2);
     
      styleTotal()
  }
}
  
function updated(){
  callCostVal = Number(callCost.value);
  smsCostVal = Number(smsCost.value);
  warnLevel = Number(warningLevel.value);
  critLevel = Number(criticalLevel.value);
  
  styleTotal()
} 

function styleTotal(){
  //const currentTotal = Number(roundedBillTotal);
  totalCostElemThree.classList.remove("danger");
  totalCostElemThree.classList.remove("warning");
  
 if(allCostTotal >= warnLevel && allCostTotal <critLevel){
   totalCostElemThree.classList.remove("danger");
   totalCostElemThree.classList.add("warning");
 }
  else if(allCostTotal >= critLevel){
    totalCostElemThree.classList.remove("warning");
    totalCostElemThree.classList.add("danger");   
  }
}



addButton.addEventListener("click", ButtonClicked);
updateButton.addEventListener("click", updated);