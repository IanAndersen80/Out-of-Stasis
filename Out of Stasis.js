// Game written by Ian Andersen in 2020 and inspired by the BBC comedy series "Red Dwarf"

// HTML Elements
window.onload = function() {
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var td0 = document.getElementById("td0");
var td000 =document.getElementById("td000")
var td1 = document.getElementById("td1");
var td2 = document.getElementById("td2");
var td3 = document.getElementById("td3");
var td4 = document.getElementById("td4");
var td1b = document.getElementById("td1b");
var td2b = document.getElementById("td2b");
var td3b = document.getElementById("td3b");
var td1c = document.getElementById("td1c");
var td2c = document.getElementById("td2c");
var td3c = document.getElementById("td3c");
var td1d = document.getElementById("td1d");
var td2d = document.getElementById("td2d");
var td3d = document.getElementById("td3d");
var td5 = document.getElementById("td5");
var td6 = document.getElementById("td6");
var arrtd = document.getElementsByTagName("td");

// CSS Handlers

function tdClr() {
	for(var i = 0, j=arguments.length; i < j; i++){
		arguments[i].innerHTML = "";
}}

function tdOff() {
	for(var i = 0, j=arguments.length; i < j; i++){
		arguments[i].style.border = "0px";
		  arguments[i].style.padding = "0px";
		  arguments[i].style.cursor = "default";
}}

function tdOn() {
	 for(var i = 0, j=arguments.length; i < j; i++){
		arguments[i].style.border = "5px solid #70dbdb";
		  arguments[i].style.padding = "5px";
		  arguments[i].style.cursor = "pointer";
}}
// Data Objects

var hold = {h3: 0, ore: 0};
var planet3 = {h3: 5000, ore: 75000};
var planet4 = {h3: 5000, ore: 50000};
var planet5 = {h3: 1000000, ore: 5000};

// Repeated Functions

function holdUpdate() {td4.innerHTML = "</br>HOLD MANIFEST</br>H3:" + hold.h3 + "</br>Ore:" + hold.ore;}
function p5Update() {td6.innerHTML = "</br>PLANET-5</br>H3:" + planet5.h3 + "</br>Ore:" + planet5.ore}
function p4Update() {td6.innerHTML = "</br>PLANET-4</br>H3:" + planet4.h3 + "</br>Ore:" + planet4.ore}
function p3Update() {td6.innerHTML = "</br>PLANET-3</br>H3:" + planet3.h3 + "</br>Ore:" + planet3.ore}

// Event Listeners
// Page 2 - Janitor No Longer

td1.addEventListener("click", cmdCycle1);
	function cmdCycle1() {
		p2.innerHTML = "Good choice! Once programmed for launch, the MS Dwarf can be run by a crew of one...Come to think of it those other 25 people didn't have to die...Anyways...below you can now see the cargo hold manifest. The ship has two holds: one for Hydrogen-3, used to auto-manufacture reactor material on-board, and ore which will be transported to the fusion smelters on Ganymede. You will need both to return to System Sol...We've got a business to run! Press <span>scan system</span> to begin";
		tdClr(td1);
		td3.innerHTML = "scan system";
		tdOff(td1);
		tdOn(td3);
		holdUpdate();
		td1.removeEventListener("click", cmdCycle1);
	}

//Page 3 - Planet 5

td3.addEventListener("click", cmdCycle2);
	function cmdCycle2() {
		p2.innerHTML = "The ship is in orbit around 5th planet in the system. The known quantities of hydrogen-3 and 'nearlyunobtanium' ore are shown to the lower right. Press <span>mine H3</span> to collect Hydrogen-3 with the autonomous mining drones and <span>mine Ore</span> to collect ore.  Each drone will return 5000 to the hold. You must collect at least 50000 of each resource to leave the system.  Press <span>transit planet</span> if the current planet is depleted prior to reaching min quantities.";
		tdClr(td3);
		td1b.innerHTML = "mine H3";
		td2b.innerHTML = "mine Ore";
		td3b.innerHTML = "transit planet";
		tdOff(td3);
		tdOn(td1b,td2b,td3b);
		holdUpdate();
		p5Update();
		planet5.h3 = planet5.h3 + 5000;
		hold.h3 = hold.h3 - 5000;
		if (planet5.h3 < 750000) { alert("Whoa Big Texas!, save some H-3 for later.") }
		td3.removeEventListener("click", cmdCycle2);
	}

td1b.addEventListener("click", planet5H3);
	function planet5H3() {
		if (planet5.h3 > 0) {
		planet5.h3 = planet5.h3 - 5000;
		hold.h3 = hold.h3 + 5000;
		}
		else {
		alert("That resource has been depleted. Move to another planet with the 'transit planet' command.");
		}
		holdUpdate();
		p5Update();
		if (planet5.h3 < 750000) { alert("Whoa Big Texas!, save some H-3 for later.") }
	}

td2b.addEventListener("click", planet5Ore);
	function planet5Ore() {
		if (planet5.ore > 0) {
			planet5.ore = planet5.ore - 5000;
			hold.ore = hold.ore + 5000;
		}
		else { alert("That resource has been depleted. Move to another planet with the 'transit planet' command.");
		}
		holdUpdate();
		p5Update();
	}

//Page 4 - Planet 4

td3b.addEventListener("click", cmdCycle3);
	function cmdCycle3() {
		td1b.removeEventListener("click", planet5H3);
		td2b.removeEventListener("click", planet5Ore);
		p2.innerHTML = "The ship is now in orbit around the 4th planet in the system. Continue mining until you have at least 50000 of each resource.  You may then press <span>jump Sol</span> to return home. If you did not mine planet-5 or wish to impress the mining board press 'transit planet' and mine planet-3 prior to returning.";
		td2.innerHTML = "jump Sol";
		tdClr(td1b,td2b,td3b);
		td1c.innerHTML = "mine H3";
		td2c.innerHTML = "mine Ore";
		td3c.innerHTML = "transit planet";
		tdOff(td1b,td2b,td3b);
		tdOn(td2,td1c,td2c,td3c);
		holdUpdate();
		p4Update();
		planet4.h3 = planet4.h3 + 5000;
		td3b.removeEventListener("click", cmdCycle3);
	}

td1c.addEventListener("click", planet4H3)
	function planet4H3() {if (planet4.h3 > 0) {
	planet4.h3 = planet4.h3 - 5000;
	hold.h3 = hold.h3 + 5000;
}
else {
	alert("That resource has been depleted. Move to another planet with the 'transit planet' command.");
}
	holdUpdate();
	p4Update();
}

td2c.addEventListener("click", planet4Ore)
	function planet4Ore() {if (planet4.ore > 0) {
	planet4.ore = planet4.ore - 5000;
	hold.ore = hold.ore + 5000;
}
else {
	alert("That resource has been depleted. Move to another planet with the 'transit planet' command.");
}
	holdUpdate();
	p4Update();
}

//Return to Sol

td2.addEventListener("click", jumpSol)
	function jumpSol() {
		if (hold.h3 >= 50000 && hold.ore  >= 50000)
		 {p2.innerHTML = "Welcome back to System Sol. Your jump was successful. Please proceed to docking at the Port of Ganymede";
		td1d.removeEventListener("click", planet3H3);
		td2d.removeEventListener("click", planet3Ore);
		p1.innerHTML = "M.S. DWARF - COMMAND CONSOLE";
		td000.innerHTML = "dock Ganymede";
tdClr(td2,td1c,td2c,td3c,td1d,td2d,td4,td6);
	tdOff(td2,td1c,td2c,td3c,td1d,td2d,);
		tdOn(td000);
		td5.innerHTML = "HOLD MANIFEST</br>H3:" + hold.h3 + "</br>Ore:" + hold.ore;
		td2.removeEventListener("click", jumpSol);
}
		else { alert("you are below cargo hold minimums. You must have at least 50000 H-3 and 50000 Ore to initiate jump.") }
	}

//Page 5 - Planet 3

td3c.addEventListener("click", cmdCycle4)
	function cmdCycle4() {
		td1c.removeEventListener("click", planet4H3);
		td2c.removeEventListener("click", planet4Ore);
		p2.innerHTML = "The ship is now in orbit around the 3rd planet in the system. Continue mining until you have at least 50000 of each resource.  You may then press <span>jump Sol</span> to return home. If you can fill your cargo hold above 100000 Ore it will be worth your while.";
		tdClr(td1c,td2c,td3c);
		tdOff(td1c,td2c,td3c);
		tdOn(td1d,td2d);
		td1d.innerHTML = "mine H3";
		td2d.innerHTML = "mine Ore";
		holdUpdate();
		p3Update();
		td3c.removeEventListener("click", cmdCycle4);
	}

td1d.addEventListener("click", planet3H3)
	function planet3H3() {if (planet3.h3 > 0) {
	planet3.h3 = planet3.h3 - 5000;
	hold.h3 = hold.h3 + 5000;
}
else {
	alert("That resource has been depleted. Consider departing the system");
}
	holdUpdate();
	p3Update();
}

td2d.addEventListener("click", planet3Ore)
	function planet3Ore() {if (planet3.ore > 0) {
	planet3.ore = planet3.ore - 5000;
	hold.ore = hold.ore + 5000;
}
else {
	alert("That resource has been depleted. Consider departing the system");
}
	holdUpdate();
	p3Update();
}

//Docking and End-of-Game

td000.addEventListener("click", dockG)
	function dockG() {
		if (hold.ore > 100000) {p2.innerHTML = "Congratulations on not only returning the M.S. Dwarf but maximizing the cargo hold.  If you can find another Janitor-12 for the M.S. Dwarf Stasis pod we have a position for you on the mining board staff."}
		else {p2.innerHTML = "Congratulations on safely returning the M.S. Dwarf with cargo in the hold.  As a token of our gratitude you have been promoted to Janitor-3."}
		p1.innerHTML = "INSIDE THE MAIN DOCKING BAY OF GANYMEDE ORBITAL PLATFORM";
		tdClr(td000);
		tdOff(td000);
		td5.innerHTML = "<b>THE END</b>";
		td000.removeEventListener("click", dockG);
	}}
