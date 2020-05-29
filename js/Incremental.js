var Number = 0;
var HasLoaded = 0;

function Increment() {
	Number = Number + 1;
	document.getElementById("Number").innerHTML = Number;
}



window.setInterval(function(){
	
	Number = Number + Incrementor1Qty + 2;
	document.getElementById("Number").innerHTML = Number;
	save() 
	if (HasLoaded == 0) load()
	
}, 1000);


window.onload = function() {
  load();
};









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



function save() {

var save = {
	Number: Number,
	Incrementor1Cost: Incrementor1Cost,
	Incrementor1Qty: Incrementor1Qty,
}

localStorage.setItem("save",JSON.stringify(save));

}

function load(){

var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.Number !== "undefined") Number = savegame.Number;
if (typeof savegame.Incrementor1Qty !== "undefined") Incrementor1Qty = savegame.Incrementor1Qty;
document.getElementById("Number").innerHTML = Number
document.getElementById("Incrementor1Qty").innerHTML = Incrementor1Qty;
}

