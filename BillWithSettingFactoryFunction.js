function BillWithSettings() {

    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theDangerLevel = 0;

    var callCostTotal = 0;

    var SmsCostTotal = 0;

    function setCallCost(callCost) {

        theCallCost = callCost;

    }


    function getCallCost() {

        return theCallCost;

    }

    function setSmsCost(SmsCost) {

        theSmsCost = SmsCost;

    }


    function getSmsCost() {

        return theSmsCost;

    }

    function setWarningLevel(WarningLevel) {

        theWarningLevel = WarningLevel;

    }

    function getWarningLevel() {

        return theWarningLevel;

    }

    function setDangerLevel(DangerLevel) {

        theDangerLevel = DangerLevel;

    }

    function getDangerLevel() {

        return theDangerLevel;

    }

    function makeCall() {
        if(!hasReachedDangerLevel()){

        callCostTotal += theCallCost;

        }

    }

    function getTotalCost() {
        return callCostTotal + SmsCostTotal;

    }

    function getTotalCallCost() {
        return callCostTotal;

    }

    function getTotalSmsCost() {
        return SmsCostTotal;

    }

    function sendSms() {
        if(!hasReachedDangerLevel()){

        SmsCostTotal += theSmsCost;
        }
    }

    function hasReachedDangerLevel(){
        return getTotalCost() >= getDangerLevel();

    }

    function totalClassName() {
        
        if (hasReachedDangerLevel()) {

            return "danger"
        }
        
        if (getTotalCost() >= getWarningLevel()) {

            return "warning"
        }
    }


    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setDangerLevel,
        getDangerLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName

    }

}