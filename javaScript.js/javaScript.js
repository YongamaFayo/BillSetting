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

// var smsCostVal = 0;
// var callCostVal = 0;
// var warnLevel = 0;
// var critLevel = 0;

// var smsCostTotal = 0;
// var callCostTotal = 0;
// var allCostTotal = 0;

var settingsInstance = BillWithSettings()

function updated(){
  settingsInstance.setCallCost(Number(callCost.value));
  settingsInstance.setSmsCost(Number(smsCost.value));
  settingsInstance.setWarningLevel(Number(warningLevel.value));
  settingsInstance.setDangerLevel(Number(criticalLevel.value));
  
  styleTotal()
} 

  function ButtonClicked(){
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  // if(allCostTotal < critLevel){
  
   if (checkedRadioBtn){
   var itemChecked = checkedRadioBtn.value;
  // alert(itemChecked)
       if(itemChecked === "call"){
      settingsInstance.makeCall()
      }
      else if (itemChecked === "sms"){
      settingsInstance.sendSms()      
     }
     
    callCostElem.innerHTML = settingsInstance.getTotalCallCost().toFixed(2);
  smsCostSetting.innerHTML = settingsInstance.getTotalSmsCost().toFixed(2);
      // allCostTotal = callCostTotal + smsCostTotal
  totalCostElemThree.innerHTML = settingsInstance.getTotalCost().toFixed(2);
     
      styleTotal()
  }
}
  

function styleTotal(){
  //const currentTotal = Number(roundedBillTotal);
  totalCostElemThree.classList.remove("danger");
  totalCostElemThree.classList.remove("warning");
  totalCostElemThree.classList.add(settingsInstance.totalClassName())
//  if(allCostTotal >= warnLevel && allCostTotal <critLevel){
//    totalCostElemThree.classList.remove("danger");
//    totalCostElemThree.classList.add("warning");
//  }
//   else if(allCostTotal >= critLevel){
//     totalCostElemThree.classList.remove("warning");
//     totalCostElemThree.classList.add("danger");   
  // }
}

// function clicked(){
//   var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSetting']:checked");
//   if (checkedRadioBtn){
//   var item = checkedRadioBtn.value;
  
  //totalAdd(item);
//   callCostElem.innerHTML = callCostTotal.toFixed(2);
//   smsCostElem.innerHTML = smsCostTotal.toFixed(2);
//   totalCostElemThree.innerHTML = allCostTotal.toFixed(2);
//   styleTotal(allCostTotal);
// }
// }
//btnAdd.addEventListener("click",clicked);


addButton.addEventListener("click", ButtonClicked);
updateButton.addEventListener("click", updated);