// Inherited: databaseRef, scoresRef, archiveRef, money, costSnickers, costTwix, numSnickers, numTwix, afterSubmit


var submitCountRef = scoresRef.child("submitCount");
var snickersRef = scoresRef.child("snickers");
var twixRef = scoresRef.child("twix");
function dbIncrementSubmitCount(n) {
    submitCountRef.transaction(function (current_value) {
        return (current_value || 0) + n;
    });
}
function dbIncrementSnickers(n) {
    snickersRef.transaction(function (current_value) {
        return (current_value || 0) + n;
    });
}
function dbIncrementTwix(n) {
    twixRef.transaction(function (current_value) {
        return (current_value || 0) + n;
    });
}

function addArchive(s, t) {
    archiveRef.push({
        "snickers": s,
        "twix": t
    })
}

function finalize(s, t) {
    dbIncrementSubmitCount(1);
    dbIncrementSnickers(s);
    dbIncrementTwix(t);
    addArchive(s, t);
    afterSubmit();
}




function incrementSnickers() {
    if (money < costSnickers) {
        return;
    }
    numSnickers += 1;
    money -= costSnickers;
    printSnickersCount(numSnickers);
    printMoney(money);
}
function incrementTwix() {
    if (money < costTwix) {
        return;
    }
    numTwix += 1;
    money -= costTwix;
    printTwixCount(numTwix);
    printMoney(money);
}
function decrementSnickers() {
    if (numSnickers < 1) {
        return;
    }
    numSnickers -= 1;
    money += costSnickers;
    printSnickersCount(numSnickers);
    printMoney(money);
}
function decrementTwix() {
    if (numTwix < 1) {
        return;
    }
    numTwix -= 1;
    money += costTwix;
    printTwixCount(numTwix);
    printMoney(money);
}


function clearPage() {
    document.documentElement.innerHTML = "Done, thanks!";
}
function printMoney(n) {
    document.getElementById("money").innerHTML = n;
}
function printSnickersCount(n) {
    document.getElementById("snickersCount").innerHTML = n;
}
function printTwixCount(n) {
    document.getElementById("twixCount").innerHTML = n;
}
function initialPrint() {
    printMoney(money);
    printSnickersCount(numSnickers);
    printTwixCount(numTwix);
}
