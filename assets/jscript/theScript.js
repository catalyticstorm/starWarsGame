// JavaScript Document

//Set up variables
var hpLuke = 100;
var apLuke = 15;
var cpLuke = 15;

var hpPalpatine = 150;
var apPalpatine = 20;
var cpPalpatine = 20;

var hpKenobi = 120;
var apKenobi = 25;
var cpKenobi = 25;

var hpVader = 180;
var apVader = 18;
var cpVader = 18;

var characters = ["lukeInfo", "vaderInfo", "sidiusInfo", "kenobiInfo"];

//Character hasn't been chosen yet, so this is -1
var charUSER = -1;
var charCOM1 = -1;
var charCOM2 = -1;
var charCOM3 = -1;

var battleGround = [];

var defeated = [];

var imgToPut = "";

var lukePic = "assets/images/lukeSkywalker.jpg";
var lukeInfo = '<img class="charIMG" src="' + lukePic + '"' + 'alt="Luke Skywalker"><br><p>Luke Skywalker, ' + hpLuke + ' HP</p>';

var vaderPic = "assets/images/darthVader.jpeg";
var vaderInfo = '<img class="charIMG" src="' + vaderPic + '"' + 'alt="Anniken Skywalker/Vader"><br><p>Darth Vader, ' + hpVader + ' HP</p>';

var sidiusPic = "assets/images/darthSidius_EmporerPalpatine.jpg";
var sidiusInfo = '<img class="charIMG" src="' + sidiusPic + '"' + 'alt="Sidius/Palpatine"><br><p>Darth Sidius/E. Palpatine, ' + hpPalpatine + ' HP</p>';

var kenobiPic = "assets/images/obiWan.gif";
var kenobiInfo = '<img class="charIMG" src="' + kenobiPic + '"' + 'alt="Obi Wan"><br><p>Obi Wan Cannoli, ' + hpKenobi + ' HP</p>';

var playerChosen = false;

//Start Loading Functions
function errorHandler() {
	alert("Unrecoverable syntax error. Refresh page");
	location.reload();
}

function putInPlace() {
	$("#personOneC").html(lukeInfo);
	$("#personTwoC").html(vaderInfo);
	$("#personThreeC").html(sidiusInfo);
	$("#personFourC").html(kenobiInfo);
}

function getChar() {
	if (charUSER == -1) {
		$("#personOneC").on("click", function() {
			charUSER = 0;
			$("#personOneC").remove();
			$("#personOneF").html(lukeInfo);
			playerChosen = true;
		});
		$("#personTwoC").on("click", function() {
			charUSER = 1;
			$("#personTwoC").remove();
			$("#personOneF").html(vaderInfo);
			playerChosen = true;
		});
		$("#personThreeC").on("click", function() {
			charUSER = 2;
			$("#personThreeC").remove();
			$("#personOneF").html(sidiusInfo);
			playerChosen = true;
		});
		$("#personFourC").on("click", function() {
			charUSER = 3;
			$("#personFourC").remove();
			$("#personOneF").html(kenobiInfo);
			playerChosen = true;
		});
	}
}

function moveOpponentToBattle() {
	$("#personOneC").on("click", function() {
		charCOM1 = 0;
		$("#personOneC").remove();
		$("#personTwoF").html(lukeInfo);
		playerChosen = true;
	});
	$("#personTwoC").on("click", function() {
		charCOM1 = 1;
		$("#personTwoC").remove();
		$("#personTwoF").html(vaderInfo);
		playerChosen = true;
	});
	$("#personThreeC").on("click", function() {
		charCOM1= 2;
		$("#personThreeC").remove();
		$("#personTwoF").html(sidiusInfo);
		playerChosen = true;
	});
	$("#personFourC").on("click", function() {
		charCOM1 = 3;
		$("#personFourC").remove();
		$("#personTwoF").html(kenobiInfo);
		playerChosen = true;
	});
}

function youveBeenDefeated() {
	
}

function moveToDefeated() {
	
}

function itsACelebration() {
	
}

function moveToWinner() {
	
}

function battleField() {
	
}

function iLost() {
	
}

function iWon() {
	
}

putInPlace();
getChar();
//if (charUSER !== -1) {
	moveOpponentToBattle();
//}