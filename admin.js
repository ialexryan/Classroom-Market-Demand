var databaseRef = new Firebase("https://sweltering-inferno-1326.firebaseIO.com");
var scoresRef = databaseRef.child("scores");
var scores1Ref = scoresRef.child("round1");
var submitCount1Ref = scores1Ref.child("submitCount");
var snickers1Ref = scores1Ref.child("snickers");
var twix1Ref = scores1Ref.child("twix");
var scores2Ref = scoresRef.child("round2");
var submitCount2Ref = scores2Ref.child("submitCount");
var snickers2Ref = scores2Ref.child("snickers");
var twix2Ref = scores2Ref.child("twix");

var submitCount1;
var submitCount2;

submitCount1Ref.on("value", function(snapshot) {
    submitCount1 = snapshot.val();
});
snickers1Ref.on("value", function(snapshot) {
    printSnickersCount((snapshot.val() / submitCount1) || "0", 1);
});
twix1Ref.on("value", function(snapshot) {
    printTwixCount((snapshot.val() / submitCount1) || "0", 1);
});

submitCount2Ref.on("value", function(snapshot) {
    submitCount2 = snapshot.val();
});
snickers2Ref.on("value", function(snapshot) {
    printSnickersCount((snapshot.val() / submitCount2) || "0", 2);
});
twix2Ref.on("value", function(snapshot) {
    printTwixCount((snapshot.val() / submitCount2) || "0", 2);
});

function clearScoreData () {
    scoresRef.set(null);
}





function printSnickersCount(n, x) {
    document.getElementById("snickersAvg" + x).innerHTML = n;
}
function printTwixCount(n, x) {
    document.getElementById("twixAvg" + x).innerHTML = n;
}
