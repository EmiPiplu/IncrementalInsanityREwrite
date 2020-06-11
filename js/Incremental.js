var Number = 0;
var HasLoaded = 0;

function Increment() {
	Number = Number + 1;
	document.getElementById("Number").innerHTML = Number;
}



window.setInterval(function(){
	
	Number = Number + Incrementor1Qty + 2;
	Incrementor1Qty = Incrementor1Qty + Incrementor2Qty
	Incrementor2Qty = Incrementor2Qty + Incrementor3Qty
	Incrementor3Qty = Incrementor3Qty + Incrementor4Qty
	Incrementor4Qty = Incrementor4Qty + Incrementor5Qty
	Incrementor5Qty = Incrementor5Qty + Incrementor6Qty
	Incrementor6Qty = Incrementor6Qty + Incrementor7Qty
	Incrementor7Qty = Incrementor7Qty + Incrementor8Qty
	document.getElementById("Number").innerHTML = Number;
	document.getElementById("Incrementor1Qty").innerHTML = Incrementor1Qty;
	document.getElementById("Incrementor2Qty").innerHTML = Incrementor2Qty;
	document.getElementById("Incrementor3Qty").innerHTML = Incrementor3Qty;
	document.getElementById("Incrementor4Qty").innerHTML = Incrementor4Qty;
	document.getElementById("Incrementor5Qty").innerHTML = Incrementor5Qty;
	document.getElementById("Incrementor6Qty").innerHTML = Incrementor6Qty;
	document.getElementById("Incrementor7Qty").innerHTML = Incrementor7Qty;
	save() 
	
	
}, 1000);


window.onload = function() {
  load();
};









var Incrementor1 = "Incrementor 1";
var Incrementor1Cost = 20;
var Incrementor1Production = 1;
var Incrementor1Qty = 0;

var Incrementor2 = "Incrementor 2";
var Incrementor2Cost = 100;
var Incrementor2Production = 1;
var Incrementor2Qty = 0;

var Incrementor3 = "Incrementor 3";
var Incrementor3Cost = 10000;
var Incrementor3Production = 1;
var Incrementor3Qty = 0;

var Incrementor4 = "Incrementor 4";
var Incrementor4Cost = 1000000;
var Incrementor4Production = 1;
var Incrementor4Qty = 0;

var Incrementor5 = "Incrementor 5";
var Incrementor5Cost = 100000000;
var Incrementor5Production = 1;
var Incrementor5Qty = 0;

var Incrementor6 = "Incrementor 6";
var Incrementor6Cost = 10000000000;
var Incrementor6Production = 1;
var Incrementor6Qty = 0;

var Incrementor7 = "Incrementor 7";
var Incrementor7Cost = 1000000000000;
var Incrementor7Production = 1;
var Incrementor7Qty = 0;

var Incrementor8 = "Incrementor 8";
var Incrementor8Cost = 100000000000000;
var Incrementor8Production = 1;
var Incrementor8Qty = 0;


function BuyIncrementor1() {
	
	if (Number >= Incrementor1Cost) {
		Number = Number - Incrementor1Cost;
		Incrementor1Qty = Incrementor1Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor1Qty").innerHTML = Incrementor1Qty;
		
	}
	
}

function BuyIncrementor2() {
	
	if (Number >= Incrementor2Cost) {
		Number = Number - Incrementor2Cost;
		Incrementor2Qty = Incrementor2Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor2Qty").innerHTML = Incrementor2Qty;
		
	}
	
}

function BuyIncrementor3() {
	
	if (Number >= Incrementor3Cost) {
		Number = Number - Incrementor3Cost;
		Incrementor3Qty = Incrementor3Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor3Qty").innerHTML = Incrementor3Qty;
		
	}
	
}

function BuyIncrementor4() {
	
	if (Number >= Incrementor4Cost) {
		Number = Number - Incrementor4Cost;
		Incrementor4Qty = Incrementor4Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor4Qty").innerHTML = Incrementor4Qty;
		
	}
	
}

function BuyIncrementor5() {
	
	if (Number >= Incrementor5Cost) {
		Number = Number - Incrementor5Cost;
		Incrementor5Qty = Incrementor5Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor5Qty").innerHTML = Incrementor5Qty;
		
	}
	
}

function BuyIncrementor6() {
	
	if (Number >= Incrementor6Cost) {
		Number = Number - Incrementor6Cost;
		Incrementor6Qty = Incrementor6Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor6Qty").innerHTML = Incrementor6Qty;
		
	}
	
}

function BuyIncrementor7() {
	
	if (Number >= Incrementor7Cost) {
		Number = Number - Incrementor7Cost;
		Incrementor7Qty = Incrementor7Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor7Qty").innerHTML = Incrementor7Qty;
		
	}
	
}

function BuyIncrementor8() {
	
	if (Number >= Incrementor8Cost) {
		Number = Number - Incrementor8Cost;
		Incrementor8Qty = Incrementor8Qty + 1;
		document.getElementById("Number").innerHTML = Number
		document.getElementById("Incrementor8Qty").innerHTML = Incrementor8Qty;
		
	}
	
}


function save() {

var save = {
	Number: Number,
	Incrementor1Qty: Incrementor1Qty,
	Incrementor2Qty: Incrementor2Qty,
	Incrementor3Qty: Incrementor3Qty,
	Incrementor4Qty: Incrementor4Qty,
	Incrementor5Qty: Incrementor5Qty,
	Incrementor6Qty: Incrementor6Qty,
	Incrementor7Qty: Incrementor7Qty,
	Incrementor8Qty: Incrementor8Qty,
}

localStorage.setItem("save",JSON.stringify(save));

}

function load(){

var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.Number !== "undefined") Number = savegame.Number;
if (typeof savegame.Incrementor1Qty !== "undefined") Incrementor1Qty = savegame.Incrementor1Qty;
if (typeof savegame.Incrementor2Qty !== "undefined") Incrementor2Qty = savegame.Incrementor2Qty;
if (typeof savegame.Incrementor3Qty !== "undefined") Incrementor3Qty = savegame.Incrementor3Qty;
if (typeof savegame.Incrementor4Qty !== "undefined") Incrementor4Qty = savegame.Incrementor4Qty;
if (typeof savegame.Incrementor5Qty !== "undefined") Incrementor5Qty = savegame.Incrementor5Qty;
if (typeof savegame.Incrementor6Qty !== "undefined") Incrementor6Qty = savegame.Incrementor6Qty;
if (typeof savegame.Incrementor7Qty !== "undefined") Incrementor7Qty = savegame.Incrementor7Qty;
if (typeof savegame.Incrementor8Qty !== "undefined") Incrementor8Qty = savegame.Incrementor8Qty;
document.getElementById("Number").innerHTML = Number
document.getElementById("Incrementor1Qty").innerHTML = Incrementor1Qty;
document.getElementById("Incrementor2Qty").innerHTML = Incrementor2Qty;
document.getElementById("Incrementor3Qty").innerHTML = Incrementor3Qty;
document.getElementById("Incrementor4Qty").innerHTML = Incrementor4Qty;
document.getElementById("Incrementor5Qty").innerHTML = Incrementor5Qty;
document.getElementById("Incrementor6Qty").innerHTML = Incrementor6Qty;
document.getElementById("Incrementor7Qty").innerHTML = Incrementor7Qty;
document.getElementById("Incrementor8Qty").innerHTML = Incrementor8Qty;
}

