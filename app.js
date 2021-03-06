$(document).ready(function() {

	// initially provided claims
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


	// new claims created using the constructor function
	var claim6 = new claim("Billy Zoom", "optical", 550);

	var claim7 = new claim("Exene Cervenka", "Specialist", 3300);

	var claim8 = new claim("DJ Bonebreak", "Emergency", 5400);

	var claim9 = new claim("Tony Gilkyson", "Specialist", 6000);

	var claim10 = new claim("Ray Manzarek", "Primary Care", 880);

	var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7, claim8, claim9, claim10];


	// initialize variables
	var totalPayedOut = 0;
	var patientName = '';
	var amountPaid = 0;


	// Claim object constructor function
	function claim(name, type, cost){
		this.patientName = name;
		this.visitType = type;
		this.visitCost = cost;
	}


	// function to determine percent covered
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


	// function to determine amount covered
	function calcAmountPaid(claim){
		var amountPaid = Math.round(calcPercentCovered(claim.visitType) * claim.visitCost);
		return amountPaid;
	}


	// Write header to page
	var $thePage = $('body');
	$thePage.append('<div>');
	$thePage.append('<span>E</span>Epsilon Insurance');
	$thePage.append('<div>');
	$thePage.append('<h1>List of Claims</h1>');
	$thePage.append("<ul>");
	$thePage.append('<div class="short"</div>')


	// Main processing loop
	// -loop over list, extract patient name, determine amount paid
	// -console log result and append to the DOM and style 
	for (i=0; i<initialList.length; i++){
		patientName=initialList[i].patientName;
		amountPaid = calcAmountPaid(initialList[i]);
		totalPayedOut += amountPaid;

		console.log('Paid out $' + amountPaid + " for " + patientName);
		$thePage.append('<li>Paid out $<strong>' + amountPaid + "</strong> for <strong>" + patientName +"</strong></li>");
	}


	// Close out UL and display total payout
	console.log('Total Paid Out: $' + totalPayedOut);
	$thePage.append('</ul>');
	$thePage.append('<div class="short"</div>')
	$thePage.append('<h2>Total Paid Out: $' + totalPayedOut +'</h2>');
	$thePage.append('</div>');

});