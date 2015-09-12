$(document).ready(function() {
	//console.log("Hello Epsilon!")



var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var claim6 = new claim("Billy Zoom", "optical", 550);

var claim7 = new claim("Exene Cervenka", "Specialist", 3300);

var claim8 = new claim("DJ Bonebreak", "Emergency", 5400);

var claim9 = new claim("Tony Gilkyson", "Specialist", 6000);

var claim10 = new claim("Ray Manzarek", "Primary Care", 880);

var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10];


//for(var i=0;i<initialList.length;i++){
//	console.log(initialList[i]);
//}

var totalPayedOut = 0;

//Claim object constructor function
///////////////////////////////////
function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
///////////////////////////////////////
function calcPercentCovered(visitType){

	var percentCovered = 0; 

	switch (visitType){
		case "Optical":
			percentCovered = 0;
			break;
		case "Specialist":
			percentCovered = 0.10;
			break;
		case "Emergency": 
			percentCovered = 1.00;
			break;
		case "Primary Care":
			percentCovered = 0.50;
			break;
		default:
			percentCovered = 0;
	}
return percentCovered;
}

//function to determine amount covered
//////////////////////////////////////
function calcAmountPaid(claim){

	var amountPaid = Math.round(calcPercentCovered(claim.visitType) * claim.visitCost);
	return amountPaid;
}

var amountPaid = 0;
var patientName = '';


//Main processing loop
//////////////////////
for (i=0;i<initialList.length;i++){
	patientName=initialList[i].patientName;
	amountPaid = calcAmountPaid(initialList[i]);
	totalPayedOut += amountPaid;

	console.log('Paid out $' + amountPaid + " for " + patientName);

}

	console.log('Total Paid Out: $' + totalPayedOut);

//////////////////////


});