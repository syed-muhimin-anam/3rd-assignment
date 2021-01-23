//

function kilometerToMeter(kilometer){
    if (typeof(kilometer) != "number" || kilometer < 0){
        return 'plese insert valid number for kilometer';
    }
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(27);
console.log(result);
 

//second problem:

function budgetCalculator(ghori, phone ,laptop){
    if (typeof(ghori) != "number" || typeof(phone) != "number" || typeof(laptop) != "number") {
        return 'please check your quantity';
    }
    else if (ghori < 0 || phone < 0 || laptop < 0) {
        return 'please check your quantity';
    }
    var ghoriCost = ghori * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = ghoriCost + phoneCost + laptopCost; /**total budget */
    return totalCost;
}
var totalBudget = budgetCalculator(10,7,5);
console.log(totalBudget);


//third problem:

function hotelCost(days){
    var cost = 0;
    if (typeof(days) != "number" || days < 0) {
        return "plese check your days";
    }
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
        cost = firstTenDay + secondTenDay + thirdPartDay;/**all day cost */
    }
    return cost;
}

var totalMoneySpend = hotelCost(37);
console.log(totalMoneySpend);



//fourth problem:

function megaFriend(name){
    var largeName = name[0];
    for (var i = 0; i < name.length; i++){
        if(typeof(name[i]) == 'number' || typeof(name[i]) == 'boolean'){
            return 'sorry you dont wright your friend name';
        }
        var check = name[i];
        if(check.length > largeName.length){
            largeName = check;
        }
    }
    return largeName;
}
var largestName = megaFriend( ['anam','urmi','mashuk','nur','himu','tuba']);
 console.log(largestName);