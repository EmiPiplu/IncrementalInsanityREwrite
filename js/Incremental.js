var Number = 0;

function Increment() {
	Number = Number + 1;
	document.getElementById("Number").innerHTML = Number;
}

function Tick() {
	Number = Number + Incrementor1Qty + 2;
	document.getElementById("Number").innerHTML = Number;
}
var Timer = window.setInterval(function(){Tick()}, 1000);

var Incrementor1 = "Incrementor 1";
var Incrementor1Cost = 20;
var Incrementor1Production = 1;
var Incrementor1Qty = 0;

function BuyIncrementor1() {
	
	if (Number >= Incrementor1Cost) {
		Number = Number - Incrementor1Cost;
		Incrementor1Qty = Incrementor1Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor1Qty").innerHTML = Incrementor1Qty;
		
	}
	
}