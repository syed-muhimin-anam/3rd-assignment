//

function kilometerToMeter(kilometer){

    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(27);
// console.log(result);
 

//second problem
function budgetCalculator(ghori, phone ,laptop){

    var ghoriCost = ghori * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = ghoriCost + phoneCost + laptopCost;
    return totalCost;
}

var totalBudget = budgetCalculator(10,7,5);
// console.log(totalBudget);

//third problem

function hotelCost(days){
    var cost = 0;
    if(days <= 10){
        cost = days * 100;
    }
    else if(days <= 20){
        var firstTenDay = 10 * 100;
        var extraDay = days - 10;
        var secondTenDay = extraDay * 80;
        cost = firstTenDay + secondTenDay;
    }
    else{
        var firstTenDay =  10 * 100;
        var secondTenDay = 10 * 80;
        var extraDay = days - 20;
        var thirdPartDay = extraDay * 50;
        cost = firstTenDay + secondTenDay + thirdPartDay;
    }
    return cost;
}

var totalMoneySpend = hotelCost(37);
// console.log(totalMoneySpend);



//fourth problem

function megaFriend(name){
    var large = name[0];
    for (var i = 0; i < name.length; i++){
        var check = name[i];
        if(check.length > large.length){
            large = check;
        }
    }
    return large;
}
var largestName = megaFriend( ['anam','urmi','mashuk','nur','himu','tuba']);
console.log(largestName)