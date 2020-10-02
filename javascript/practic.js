var allies = ["United States", "United Kingdom", "France", "Soviet Union"];
var axis = ["Germany", "Italy", "japan"];

numAllies = allies.length;
numAxis = axis.length;

console.log(allies);
console.log(axis);

console.log("Generate list of Ambassadorships");

var ambassadorships = [];

for ( var i=0; i < numAllies; i++ ) {
    console.log("Main Loop Step: " + i + ": " + allies[i]);
    for ( var i2=0; i2 < numAxis; i2++ ) {
        console.log("Second Loop Step: " + i2 + ": " + axis[i2]);
        ambassadorships.push(allies[i] + " Ambassador to " + axis[i2]);
        console.log(ambassadorships);
        console.log("Secondary Loop Iteration Completed");

}
}

console.log("For Loop Completed ");

for ( i=0; i < ambassadorships.length; i++ ) {


}